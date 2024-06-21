import {Router} from 'express'
import { listar } from './controladores/instrutores'

const rotas = Router()

// listar todos instrutores;
rotas.get('/instrutores', listar)

// detalhar as informações de um instrutor
// editar um instrutor
// excluir um instrutor

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default rotas