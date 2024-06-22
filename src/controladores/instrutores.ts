import { Request, Response } from "express";


let proximoID = 5

type TInstrutores = {
    id: number;
    nome: string;
    email: number
}

const instrutores: TInstrutores[] = [
    { id: 1, nome: "João", email: 30 },
    { id: 2, nome: "Maria", email: 25 },
    { id: 3, nome: "Pedro", email: 40 },
    { id: 4, nome: "Ana", email: 35 },
]

export function listar(req:Request, res:Response) {
    return res.status(200).json(instrutores)
}

export function detalhar(req:Request, res:Response) {
    const { id } = req.params

    const instrutor = instrutores.find((item) => {
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
        id: proximoID++,
        nome,
        email
    }

    instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)
}

export function atualizar(req:Request, res:Response) {
    const {nome, email} = req.body
    const { id } = req.params

    const instrutor = instrutores.find((item) => {
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

    const instrutor = instrutores.find((item) => {
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

    const instrutorIndex = instrutores.findIndex((item) => {
        return item.id === Number(id)
    })

    if (instrutorIndex === -1) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    instrutores.splice(instrutorIndex, 1)
    return res.status(204).send()
}
