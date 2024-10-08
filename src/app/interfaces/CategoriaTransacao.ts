import { IIndex } from "./Helper"

export interface ICategoriaTransacao {
  index(data: IIndex): Promise<{ count: number, rows: ICategoriaTransacaoResponse[] }>
  create(data: ICategoriaTransacaoDTO): Promise<string>
  find(id: string): Promise<ICategoriaTransacaoResponse | null>
  findAll(): Promise<ICategoriaTransacaoResponse[]>
  delete(id: string): Promise<ICategoriaTransacaoResponse>
  update(data: ICategoriaTransacaoDTO, id: string): Promise<ICategoriaTransacaoResponse>
}

export interface ICategoriaTransacaoDTO {
  nome: string
  tipo: number
  codigoUsuario: string
  codigoSubCategoria: string
}

export interface ICategoriaTransacaoResponse extends ICategoriaTransacaoDTO {
  id: string
}
