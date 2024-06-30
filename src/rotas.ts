import {Router} from 'express'
import { atualizar, atualizarEmail, cadastrar, detalhar, excluir, listar } from './controladores/instrutores'
import { cadastrarAula } from './controladores/aulas'

const rotas = Router()

// listar todos instrutores;
rotas.get('/instrutores', listar)

// detalhar as informações de um instrutor
rotas.get('/instrutores/:id', detalhar)

// cadastrar uma aula para um instrutor
rotas.post('/instrutores', cadastrar)

// editar um instrutor
rotas.put('/instrutores/:id', atualizar)

//edição parcial
rotas.patch('/instrutores/:id/alterarEmail', atualizarEmail)

// excluir um instrutor
rotas.delete('/instrutores/:id', excluir)

// cadastrar uma aula para um instrutor 
rotas.post('/instrutores/:id/aulas', cadastrarAula)

// excluir uma aula para um instrutor

export default rotas