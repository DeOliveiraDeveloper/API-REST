import { Request, Response } from "express";

type TInstrutores = {
    id: number;
    nome: string;
    idade: number
}

const instrutores: TInstrutores[] = [
    { id: 1, nome: "João", idade: 30 },
    { id: 2, nome: "Maria", idade: 25 },
    { id: 3, nome: "Pedro", idade: 40 },
    { id: 4, nome: "Ana", idade: 35 },
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
