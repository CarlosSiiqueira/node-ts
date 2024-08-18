import { container } from "tsyringe"
import "reflect-metadata"

//repositories
import { ContaBancariaRepository } from '../../app/repositories/conta.bancaria.repository'
import { ExcursaoRepository } from '../../app/repositories/excursao.repository'
import { FinanceiroRepository } from '../../app/repositories/financeiro.repository'
import { FormaPagamentoRepository } from '../../app/repositories/forma.pagamento.repository'
import { PacoteRepository } from '../../app/repositories/pacote.repository'
import { PessoaRepository } from '../../app/repositories/pessoa.repository'
import { ProdutoRepository } from '../../app/repositories/produto.repository'
import { UsuarioRepository } from '../../app/repositories/usuario.repository'
import { ExcursaoQuartosRepository } from '../../app/repositories/excursao.quartos.repository'
import { ExcursaoOnibusRepository } from '../../app/repositories/excursao.onibus.repository'
import { EnderecoRepository } from "../../app/repositories/endereco.repository"
import { LocalEmbarqueRepository } from "../../app/repositories/local.embarque.repository"
import { PassageiroEmbarqueRepository } from "../../app/repositories/passageiro.embarque.repository"
import { VendasRepository } from "../../app/repositories/vendas.repository"
import { DestinosRepository } from "../../app/repositories/destinos.repository"
import { FornecedorRepository } from "../../app/repositories/fornecedor.repository"
import { ExcursaoPassageirosRepository } from "../../app/repositories/excursao.passageiros.repository"
import { CategoriaTransacaoRepository } from "../../app/repositories/categoria.transacao.repository"
import { TipoQuartoRepository } from "../../app/repositories/tipo.quarto.repository"
import { ReservaRepository } from "../../app/repositories/reserva.repository"
import { SubCategoriaTransacaoRepository } from "../../app/repositories/subcategoria.transacao.repository"
import { RankingClientesRepository } from "../../app/repositories/ranking.clientes.repository"

//interfaces
import { IContaBancaria } from "../../app/interfaces/ContaBancaria"
import { IExcursao } from "../../app/interfaces/Excursao"
import { IFinanceiro } from "../../app/interfaces/Financeiro"
import { IFormaPagamento } from "../../app/interfaces/FormaPagamento"
import { IPacote } from "../../app/interfaces/Pacote"
import { IPessoa } from "../../app/interfaces/Pessoa"
import { IProduto } from "../../app/interfaces/Produto"
import { IUsuario } from "../../app/interfaces/Usuario"
import { IExcursaoQuartos } from "../../app/interfaces/ExcursaoQuartos"
import { IExcursaoOnibus } from "../../app/interfaces/ExcursaoOnibus"
import { IEndereco } from "../../app/interfaces/Endereco"
import { ILocalEmbarque } from "../../app/interfaces/LocalEmbarque"
import { IVendas } from "../../app/interfaces/Vendas"
import { IDestinos } from "../../app/interfaces/Destinos"
import { IFornecedor } from "../../app/interfaces/Fornecedor"
import { IExcursaoPassageiros } from "../../app/interfaces/ExcursaoPassageiros"
import { IPassageiroEmbarque } from "../../app/interfaces/PassageiroEmbarque"
import { ICategoriaTransacao } from "../../app/interfaces/CategoriaTransacao"
import { ITipoQuarto } from "../../app/interfaces/TipoQuarto"
import { IReserva } from "../../app/interfaces/Reserva"
import { ISubCategoriaTransacao } from "../../app/interfaces/SubCategoriaTransacao"
import { IRankingCliente } from "../../app/interfaces/RankingCliente"



container.registerSingleton<IContaBancaria>(
  "ContaBancariaRepository",
  ContaBancariaRepository
)

container.registerSingleton<IExcursao>(
  "ExcursaoRepository",
  ExcursaoRepository
)

container.registerSingleton<IFinanceiro>(
  "FinanceiroRepository",
  FinanceiroRepository
)

container.registerSingleton<IFormaPagamento>(
  "FormaPagamentoRepository",
  FormaPagamentoRepository
)

container.registerSingleton<IPacote>(
  "PacoteRepository",
  PacoteRepository
)

container.registerSingleton<IPessoa>(
  "PessoaRepository",
  PessoaRepository
)

container.registerSingleton<IProduto>(
  "ProdutoRepository",
  ProdutoRepository
)

container.registerSingleton<IUsuario>(
  "UsuarioRepository",
  UsuarioRepository
)

container.registerSingleton<IExcursaoQuartos>(
  "ExcursaoQuartosRepository",
  ExcursaoQuartosRepository
)

container.registerSingleton<IExcursaoOnibus>(
  "ExcursaoOnibusRepository",
  ExcursaoOnibusRepository
)

container.registerSingleton<IEndereco>(
  "EnderecoRepository",
  EnderecoRepository
)

container.registerSingleton<ILocalEmbarque>(
  "LocalEmbarqueRepository",
  LocalEmbarqueRepository
)

container.registerSingleton<IVendas>(
  "VendasRepository",
  VendasRepository
)

container.registerSingleton<IDestinos>(
  "DestinosRepository",
  DestinosRepository
)

container.registerSingleton<IFornecedor>(
  "FornecedorRepository",
  FornecedorRepository
)

container.registerSingleton<IExcursaoPassageiros>(
  "ExcursaoPassageirosRepository",
  ExcursaoPassageirosRepository
)

container.registerSingleton<IPassageiroEmbarque>(
  "PassageiroEmbarqueRepository",
  PassageiroEmbarqueRepository
)

container.registerSingleton<ICategoriaTransacao>(
  "CategoriaTransacaoRepository",
  CategoriaTransacaoRepository
)

container.registerSingleton<ITipoQuarto>(
  "TipoQuartoRepository",
  TipoQuartoRepository
)

container.registerSingleton<IReserva>(
  "ReservaRepository",
  ReservaRepository
)

container.registerSingleton<ISubCategoriaTransacao>(
  "SubCategoriaTransacaoRepository",
  SubCategoriaTransacaoRepository
)

container.registerSingleton<IRankingCliente>(
  "RankingClientesRepository",
  RankingClientesRepository
)
