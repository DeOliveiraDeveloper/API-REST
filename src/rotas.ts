import {Router} from 'express'
import { atualizar, cadastrar, detalhar, listar } from './controladores/instrutores'

const rotas = Router()

// listar todos instrutores;
rotas.get('/instrutores', listar)

// detalhar as informações de um instrutor
rotas.get('/instrutores/:id', detalhar)

// cadastrar uma aula para um instrutor
rotas.post('/instrutores', cadastrar)

// editar um instrutor
rotas.put('/instrutores/:id', atualizar)
// excluir um instrutor
// excluir uma aula para um instrutor

export default rotas