import { Router } from "express"
import { passageiroEmbarqueController } from "../controllers"

const passageiroEmbarque = Router()

passageiroEmbarque.post('/create', passageiroEmbarqueController.create)
passageiroEmbarque.get('/find/:id', passageiroEmbarqueController.find)
passageiroEmbarque.get('/findAll', passageiroEmbarqueController.findAll)
passageiroEmbarque.get('/findByExcursao/:idExcursao', passageiroEmbarqueController.findByExcursao)
passageiroEmbarque.put('/embarcou', passageiroEmbarqueController.embarqueDesembarque)
passageiroEmbarque.put('/embarque-qrcode', passageiroEmbarqueController.embarqueQRCode)

export { passageiroEmbarque }
