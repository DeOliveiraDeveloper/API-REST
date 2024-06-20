const {Router} = require('express')
const { listar } = require('./controladores/instrutores')

const rotas = Router()

rotas.get('/', () =>{
    return 'Bem vindo a API de Instrutores'
})

// listar todos instrutores;


// detalhar as informações de um instrutor
// editar um instrutor
// excluir um instrutor

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

module.exports = rotas