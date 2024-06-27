import { Request, Response } from "express";
import { bancoDeDados } from "../bancoDeDados";

export function listar(req:Request, res:Response) {
    return res.status(200).json(bancoDeDados.instrutores)
}

export function detalhar(req:Request, res:Response) {
    const { id } = req.params

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }
    
    return res.status(200).json(instrutor)
}

export function cadastrar(req:Request, res:Response) {
    console.log(req.body);
    
    const { nome, email } = req.body

    const novoInstrutor = {
        id: bancoDeDados.proximoID++,
        nome,
        email
    }

    bancoDeDados.instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)
}

export function atualizar(req:Request, res:Response) {
    const {nome, email} = req.body
    const { id } = req.params

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    instrutor.nome = nome;
    instrutor.email = email

    return res.status(204).send()
}

export function atualizarEmail(req:Request, res:Response) {
    const {email} = req.body
    const { id } = req.params

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }
    
    instrutor.email = email

    return res.status(204).send()
}

export function excluir(req:Request, res:Response) {
    const {nome, email} = req.body
    const { id } = req.params

    const instrutorIndex = bancoDeDados.instrutores.findIndex((item) => {
        return item.id === Number(id)
    })

    if (instrutorIndex === -1) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    bancoDeDados.instrutores.splice(instrutorIndex, 1)
    return res.status(204).send()
}
