import { Request, Response } from "express";
import { bancoDeDados } from "../bancoDeDados";

export function cadastrarAula(req:Request, res:Response) {
    const {id} = req.params
    const {nome} = req.body

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor){
        return res.status(404).json({erro: "Instrutor não encontrado."})
    }

    const novaAula = {
        id: bancoDeDados.proximoIDAula++,
        nome
    }

    if (instrutor.aulas){
        instrutor.aulas.push(novaAula)
        return res.status(201).json(novaAula)
    }

    instrutor.aulas = [novaAula]
    return res.status(201).json(novaAula)

}
