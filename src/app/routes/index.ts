import { Router } from "express"
import { contaBancaria } from "../routes/conta.bancaria.routes"
import { excursao } from "../routes/excursao.routes"
import { financeiro } from "../routes/financeiro.routes"
import { formaPagamento } from "../routes/forma.pagamento.routes"
import { pacote } from "../routes/pacote.routes"
import { pessoa } from "../routes/pessoa.routes"
import { produto } from "../routes/produto.routes"
import { usuario } from "../routes/usuario.routes"
import { excursaoQuartos } from "../routes/excursao.quartos.routes"
import { excursaoOnibus } from "../routes/excursao.onibus.routes"
import { endereco } from "../routes/endereco.routes"
import { localEmbarque } from "../routes/local.embarque.routes"
import { vendas } from "../routes/vendas.routes"
import { destinos } from "../routes/destinos.routes"
import { fornecedor } from "../routes/fornecedor.routes"

const router = Router()

router.use('/conta-bancaria', contaBancaria)
router.use('/excursao', excursao)
router.use('/financeiro', financeiro)
router.use('/forma-pagamento', formaPagamento)
router.use('/pacotes', pacote)
router.use('/pessoas', pessoa)
router.use('/produtos', produto)
router.use('/usuarios', usuario)
router.use('/excursao-quartos', excursaoQuartos)
router.use('/excursao-onibus', excursaoOnibus)
router.use('/endereco', endereco)
router.use('/local-embarque', localEmbarque)
router.use('/vendas', vendas)
router.use('/destinos', destinos)
router.use('/fornecedor', fornecedor)

export { router }
