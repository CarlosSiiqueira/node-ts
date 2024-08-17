import { LocalEmbarqueRepository } from '../repositories/local.embarque.repository'
import { inject, injectable } from "tsyringe"
import { Request, Response } from 'express'
import { EnderecoService } from '../services/endereco.service'
import { formatIndexFilters } from '../../shared/utils/filters'

@injectable()
class LocalEmbarqueController {
  constructor(
    @inject("LocalEmbarqueRepository")
    private localEmbarqueRepository: LocalEmbarqueRepository,
    private enderecoService: EnderecoService
  ) { }

  index = async (request: Request, response: Response): Promise<void> => {

    const { orderBy, order, skip, take, filter } = formatIndexFilters(request)

    const localEmbarque = await this.localEmbarqueRepository.index({ orderBy, order, skip, take, filter })

    response.status(200).send(localEmbarque)
  }

  create = async (request: Request, response: Response): Promise<void> => {

    let codigoEndereco: string = ''

    try {
      codigoEndereco = await this.enderecoService.findOrCreateAddress({
        cep: request.body.cep || '',
        cidade: request.body.cidade || '',
        complemento: request.body.complemento || '',
        logradouro: request.body.logradouro || '',
        numero: request.body.numero || '',
        uf: request.body.uf || '',
        bairro: request.body.bairro || ''
      })

      request.body.codigoEndereco = codigoEndereco

    } catch (error) {
      response.status(500).send(`Erro ao incluir endereço, verifique body (cep,numero) para buscar endereço
                 ou (cep, cidade, complemento, logradouro, numero, uf) para criar novo `)
      return;
    }

    const res = await this.localEmbarqueRepository.create(request.body)

    response.status(200).send(res)
  }

  find = async (request: Request, response: Response): Promise<void> => {

    const res = await this.localEmbarqueRepository.find(request.params.id)

    response.status(200).send(res)
  }

  findAll = async (request: Request, response: Response): Promise<void> => {

    const res = await this.localEmbarqueRepository.findAll()

    response.status(200).send(res)
  }

  update = async (request: Request, response: Response): Promise<void> => {

    const res = await this.localEmbarqueRepository.update(request.body, request.params.id)

    response.status(200).send(res)
  }

  delete = async (request: Request, response: Response): Promise<void> => {

    const res = await this.localEmbarqueRepository.delete(request.params.id)

    response.status(200).send(res)
  }

}

export { LocalEmbarqueController }
