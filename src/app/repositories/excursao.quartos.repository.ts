import prismaManager from "../database/database"
import { IExcursaoQuartos, IExcursaoQuartosDTO, IExcursaoQuartosResponse } from "../interfaces/ExcursaoQuartos"
import { Warning } from "../errors"
import { IIndex } from "../interfaces/Helper"

class ExcursaoQuartosRepository implements IExcursaoQuartos {

  private prisma = prismaManager.getPrisma()

  index = async ({ orderBy, order, skip, take, filter }: IIndex): Promise<{ count: number, rows: IExcursaoQuartosResponse[] }> => {

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
                Passageiros: {
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
      this.prisma.excursaoQuartos.count({ where }),
      this.prisma.excursaoQuartos.findMany({
        skip,
        take,
        orderBy: {
          [orderBy as string]: order
        },
        where,
        include: {
          Passageiros: true
        }
      })
    ])

    return { count, rows }
  }

  create = async ({
    numeroQuarto,
    codigoExcursao,
    passageiros,
    usuarioCadastro
  }: IExcursaoQuartosDTO): Promise<string[]> => {

    try {

      const id = crypto.randomUUID()

      const excursaoQuartos = await this.prisma.excursaoQuartos.create({
        data: {
          id: id,
          numeroQuarto: numeroQuarto,
          codigoExcursao: codigoExcursao,
          usuarioCadastro: usuarioCadastro,
          Passageiros: {
            connect: passageiros.map(codigoPassageiro => ({ id: codigoPassageiro }))
          }
        }
      })

      if (!excursaoQuartos) {
        throw new Warning('excursao sem quartos configurados')
      }

      return ['Quartos definidos com sucesso']

    } catch (error) {
      return ['Erro ao registrar quarto']
    }
  }

  find = async (idExcursao: string): Promise<IExcursaoQuartosResponse[]> => {

    const excursaoQuartos = await this.prisma.excursaoQuartos.findMany({
      where: {
        codigoExcursao: idExcursao
      },
      select: {
        id: true,
        numeroQuarto: true,
        dataCadastro: true,
        codigoExcursao: true,
        Passageiros: {
          select: {
            id: true,
            nome: true
          }
        },
        usuarioCadastro: true,
        Excursao: true
      }
    })

    if (!excursaoQuartos) {
      throw new Warning('não existem quartos definidos para essa excursao', 400)
    }

    return excursaoQuartos
  }

  update = async ({
    numeroQuarto,
    codigoExcursao,
    passageiros,
    usuarioCadastro }: IExcursaoQuartosDTO, id: string): Promise<string[]> => {

    await this.prisma.excursaoQuartos.update({
      where: {
        id
      },
      data: {
        Passageiros: {
          set: []
        }
      }
    })

    const excursaoQuartos = await this.prisma.excursaoQuartos.update({
      data: {
        numeroQuarto: numeroQuarto,
        dataCadastro: new Date(),
        usuarioCadastro: usuarioCadastro,
        Passageiros: {
          connect: passageiros.map(codigoPassageiro => ({ id: codigoPassageiro }))
        }
      },
      where: {
        id: id
      }
    })

    if (!excursaoQuartos) {
      throw new Warning('registro não encontrado', 400)
    }

    return ['Registro atualizado com sucesso']
  }
}

export { ExcursaoQuartosRepository }
