import { Router } from "express"
import { pessoaController } from "../controllers"

const pessoa = Router()

pessoa.get('/find/:id', pessoaController.find)
pessoa.get('/findAll', pessoaController.findAll)
pessoa.post('/create', pessoaController.create)
pessoa.put('/update/:id', pessoaController.update)
pessoa.patch('/delete', pessoaController.delete)

export { pessoa }
