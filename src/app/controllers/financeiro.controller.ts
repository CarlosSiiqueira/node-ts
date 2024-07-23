import { FinanceiroRepository } from '../repositories/financeiro.repository'
import { inject, injectable } from "tsyringe"
import { Request, Response } from 'express'
import { FinanceiroService } from '../services/financeiro.service'
import { FormaPagamentoRepository } from '../repositories/forma.pagamento.repository'
import { formatIndexFilters } from '../../shared/utils/filters'

@injectable()
class FinanceiroController {
  constructor(
    @inject("FinanceiroRepository")
    private financeiroRepository: FinanceiroRepository,
    private financeiroService: FinanceiroService = new FinanceiroService(financeiroRepository),
    @inject("FormaPagamentoRepository")
    private formaPagamentoRepository: FormaPagamentoRepository
  ) { }

  index = async (request: Request, response: Response): Promise<void> => {

    const { orderBy, order, skip, take, filter } = formatIndexFilters(request, 'data')

    const res = await this.financeiroRepository.index({ orderBy, order, skip, take, filter })

    response.status(200).send(res)
  }

  create = async (request: Request, response: Response): Promise<void> => {

    const formaPagamento = await this.formaPagamentoRepository.find(request.body.codigoFormaPagamento)

    request.body.dataPrevistaRecebimento = await this.financeiroService.setDataPrevistaPagamento(formaPagamento.qtdDiasRecebimento, request.body.data)

    const res = await this.financeiroRepository.create(request.body)

    response.status(200).send(res)
  }

  find = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroRepository.find(request.params.id)

    response.status(200).send(res)
  }

  findAll = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroRepository.findAll()

    response.status(200).send(res)
  }

  update = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroRepository.update(request.body, request.params.id)

    response.status(200).send(res)
  }

  delete = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroRepository.delete(request.params.id)

    response.status(200).send(res)
  }

  setVistoAdmin = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroService.setVistoAdmin(request.body.visto, request.params.id)

    response.status(200).send(res)
  }

  efetivarTransacao = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroService.efetivarTransacao(request.body, request.params.id)
    await this.financeiroService.confirmaPagamentoWoo(request.params.id)

    response.status(200).send(res)
  }

  desEfetivar = async (request: Request, response: Response): Promise<void> => {

    const res = await this.financeiroService.desEfetivar(request.params.id)

    response.status(200).send(res)
  }
}

export { FinanceiroController }
