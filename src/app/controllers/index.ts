import { container } from "tsyringe"
import "reflect-metadata"
import "../../shared/container/index"

//controllers
import { ContaBancariaController } from "./conta.bancaria.controller"
import { ExcursaoController } from "./excursao.controller"
import { FinanceiroController } from "./financeiro.controller"
import { FormaPagamentoController } from "./forma.pagamento.controller"
import { PacoteController } from "./pacote.controller"
import { PessoaController } from "./pessoa.controller"
import { ProdutoController } from "./produto.controller"
import { UsuarioController } from "./usuario.controller"
import { ExcursaoQuartosController } from "./excursao.quartos.controller"
import { ExcursaoOnibusController } from "./excursao.onibus.controller"
import { EnderecoController } from "./endereco.controller"
import { LocalEmbarqueController } from "./local.embarque.controller"
import { VendasController } from "./vendas.controller"
import { DestinosController } from "./destinos.controller"
import { FornecedorController } from "./fornecedor.controller"
import { ExcursaoPassageirosController } from "./excursao.passageiros.controller"
import { PassageiroEmbarqueController } from "./passageiro.embarque.controller"
import { CategoriaTransacaoController } from "./categoria.transacao.controller"
import { TipoQuartoController } from "./tipo.quarto.controller"
import { ReservaController } from "./reservas.controller"

export const contaBancariaController = container.resolve(ContaBancariaController)
export const excursaoController = container.resolve(ExcursaoController)
export const financeiroController = container.resolve(FinanceiroController)
export const formaPagamentoController = container.resolve(FormaPagamentoController)
export const pacoteController = container.resolve(PacoteController)
export const pessoaController = container.resolve(PessoaController)
export const produtoController = container.resolve(ProdutoController)
export const usuarioController = container.resolve(UsuarioController)
export const excursaoQuartosController = container.resolve(ExcursaoQuartosController)
export const excursaoOnibusController = container.resolve(ExcursaoOnibusController)
export const enderecoController = container.resolve(EnderecoController)
export const localEmbarqueController = container.resolve(LocalEmbarqueController)
export const vendasController = container.resolve(VendasController)
export const destinosController = container.resolve(DestinosController)
export const fornecedorController = container.resolve(FornecedorController)
export const excursaoPassageirosController = container.resolve(ExcursaoPassageirosController)
export const passageiroEmbarqueController = container.resolve(PassageiroEmbarqueController)
export const categoriaTransacaoController = container.resolve(CategoriaTransacaoController)
export const tipoQuartoController = container.resolve(TipoQuartoController)
export const reservaController = container.resolve(ReservaController)
