import prismaManager from "../database/database";
import { Warning } from "../errors";
import { IIndex } from "../interfaces/Helper";
import { IVendas, IVendasDTO, IVendasResponse } from "../interfaces/Vendas";
import crypto from 'crypto'

class VendasRepository implements IVendas {

  private prisma = prismaManager.getPrisma()

  index = async ({ orderBy, order, skip, take, filter }: IIndex): Promise<{ count: number, rows: IVendasResponse[] }> => {

    const where = {
      NOT: {
        id: undefined
      }
    }

    Object.entries(filter as { [key: string]: string }).map(([key, value]) => {

      switch (key) {
        case 'nome':
          Object.assign(where, {
            OR: [
              {
                nome: {
                  contains: value,
                  mode: "insensitive"
                }
              },
              {
                Usuarios: {
                  nome: {
                    contains: value,
                    mode: "insensitive"
                  }
                }
              }
            ]
          })
          break;
      }
    })

    const [count, rows] = await this.prisma.$transaction([
      this.prisma.vendas.count({ where }),
      this.prisma.vendas.findMany({
        skip,
        take,
        orderBy: {
          [orderBy as string]: order
        },
        where,
        include: {
          Usuarios: true,
          Produtos: true,
          Excursao: true
        }
      })
    ])

    return { count, rows }
  }

  create = async ({
    valor,
    qtd,
    origem = 1,
    codigoCliente,
    codigoFormaPagamento,
    codigoProduto = null,
    codigoExcursao = null,
    usuarioCadastro
  }: IVendasDTO): Promise<string[]> => {

    try {

      const id = crypto.randomUUID()

      const venda = await this.prisma.vendas.create({
        data: {
          id,
          valor,
          qtd,
          origem,
          codigoCliente,
          codigoFormaPagamento,
          codigoProduto,
          codigoExcursao,
          usuarioCadastro
        }
      })

      return ['Venda criada com sucesso']

    } catch (error) {
      throw new Warning('Não foi possível criar venda', 400)
    }

  }

  find = async (id: string): Promise<IVendasResponse | null> => {

    const venda = await this.prisma.vendas.findUnique({
      where: {
        id
      }
    })

    if (!venda) {
      throw new Warning("Venda não encontrada", 400)
    }

    return venda
  }

  findAll = async (): Promise<IVendasResponse[]> => {

    const vendas = await this.prisma.vendas.findMany()

    if (!vendas) {
      throw new Warning("Sem vendas na base", 400)
    }

    return vendas
  }

  update = async ({
    valor,
    qtd,
    efetivada,
    codigoCliente,
    codigoFormaPagamento,
    codigoProduto,
    codigoExcursao,
    usuarioCadastro
  }: IVendasDTO, id: string): Promise<string[]> => {

    try {

      let data = new Date(Date.now())

      const venda = await this.prisma.vendas.update({
        data: {
          valor,
          qtd,
          efetivada,
          data,
          codigoCliente,
          codigoFormaPagamento,
          codigoProduto,
          codigoExcursao,
          usuarioCadastro
        },
        where: {
          id
        }
      })

      if (!venda) {
        throw new Warning("Venda não encontrada", 400)
      }

      return ['Venda atualizada com sucesso']

    } catch (error) {
      throw new Warning('Erro ao atualizar venda', 400)
    }

  }

  delete = async (id: string): Promise<string[]> => {

    const venda = await this.prisma.vendas.delete({
      where: {
        id
      }
    })

    if (!venda) {
      throw new Warning("Venda não encontrada", 400)
    }

    return ['Venda excluída com sucesso']
  }

}

export { VendasRepository }
