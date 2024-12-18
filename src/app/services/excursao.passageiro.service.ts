import { inject, injectable } from "tsyringe";
import { ExcursaoPassageirosRepository } from "../repositories/excursao.passageiros.repository";
import { IExcursaoPassageirosDTO, IExcursaoPassageirosEmbarqueReponse, IExcursaoPassageirosResponse } from "../interfaces/ExcursaoPassageiros";
import { IIndex } from "../interfaces/Helper";

interface summary {
  id?: string | null
  nome?: string | null
  count: number
}

@injectable()
export class ExcursaoPassageiroService {

  constructor (
    @inject("ExcursaoPassageirosRepository")
    private excursaoPassageiroRepository: ExcursaoPassageirosRepository
  ) { }

  create = async ({
    idExcursao,
    idPassageiro,
    localEmbarque,
    reserva
  }: IExcursaoPassageirosDTO): Promise<string[]> => {

    const passageiro = await this.excursaoPassageiroRepository.create({
      idExcursao,
      idPassageiro,
      localEmbarque,
      reserva
    })

    return passageiro
  }

  findByIdPessoa = async (idsPassageiros: string[], idExcursao: string): Promise<IExcursaoPassageirosResponse[]> => {

    const passageiros = await this.excursaoPassageiroRepository.findByIdPessoa(idsPassageiros, idExcursao)

    return passageiros
  }

  find = async (idExcursao: string): Promise<IExcursaoPassageirosResponse[]> => {

    const passageiros = await this.excursaoPassageiroRepository.find(idExcursao)

    return passageiros
  }

  deleteMultiple = async (idsPassageiros: Array<string>, idExcursao: string): Promise<any> => {

    const passageiros = await this.excursaoPassageiroRepository.deleteMultiple(idsPassageiros, idExcursao)

    return passageiros
  }

  countTripsByPassenger = async (idPassageiro: string): Promise<number> => {
    return await this.excursaoPassageiroRepository.countTripsByPassenger(idPassageiro)
  }
}
