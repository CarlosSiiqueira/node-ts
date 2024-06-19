import { FormaPagamentoRepository } from '../repositories/forma.pagamento.repository'
import { inject, injectable } from "tsyringe"
import { Request, Response } from 'express'

@injectable()
class FormaPagamentoController {
  constructor(
    @inject("FormaPagamentoRepository")
    private formaPagamentoRepository: FormaPagamentoRepository
  ) { }

  create = async (request: Request, response: Response): Promise<void> => {

    const res = await this.formaPagamentoRepository.create(request.body)

    response.status(200).send(res)
  }

  find = async (request: Request, response: Response): Promise<void> => {

    const res = await this.formaPagamentoRepository.find(request.params.id)

    response.status(200).send(res)
  }

  findAll = async (request: Request, response: Response): Promise<void> => {

    const res = await this.formaPagamentoRepository.findAll()

    response.status(200).send(res)
  }

  update = async (request: Request, response: Response): Promise<void> => {

    const res = await this.formaPagamentoRepository.update(request.body, request.params.id)

    response.status(200).send(res)
  }

  delete = async (request: Request, response: Response): Promise<void> => {

    const res = await this.formaPagamentoRepository.delete(request.params.id)

    response.status(200).send(res)
  }

}

export { FormaPagamentoController }
