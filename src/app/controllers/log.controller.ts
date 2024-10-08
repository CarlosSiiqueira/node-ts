import { injectable, inject } from "tsyringe";
import { LogRepository } from "../repositories/log.repository";
import { Request, Response } from "express";
import { formatIndexFilters } from "../../shared/utils/filters";

@injectable()
class LogController {

  constructor(
    @inject("LogRepository")
    private logRepository: LogRepository,
  ) { }

  index = async (request: Request, response: Response): Promise<void> => {

    const { orderBy, order, skip, take, filter } = formatIndexFilters(request, 'data')

    const res = await this.logRepository.index({ orderBy, order, skip, take, filter })

    response.status(200).send(res)
  }

  create = async (request: Request, response: Response): Promise<void> => {


    const res = await this.logRepository.create(request.body)

    response.status(200).send(res)
  }

  find = async (request: Request, response: Response): Promise<void> => {

    const res = await this.logRepository.find(request.params.id)

    response.status(200).send(res)
  }

  findAll = async (request: Request, response: Response): Promise<void> => {

    const res = await this.logRepository.findAll()

    response.status(200).send(res)
  }

  update = async (request: Request, response: Response): Promise<void> => {

    const res = await this.logRepository.update(request.body, request.params.id)

    response.status(200).send(res)
  }

  delete = async (request: Request, response: Response): Promise<void> => {

    const res = await this.logRepository.delete(request.params.id)

    response.status(200).send(res)
  }
}

export { LogController }
