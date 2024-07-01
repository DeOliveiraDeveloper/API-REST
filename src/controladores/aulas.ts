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

export function excluirAula(req:Request, res:Response) {
    const {id, idAula} = req.params

    const instrutor = bancoDeDados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor){
        return res.status(404).json({erro: "Instrutor não encontrado."})
    }

    if (!instrutor.aulas) {
        return res.status(404).json({erro: "Aula não encontrada."})
    }

    const aulaIndex = instrutor.aulas.findIndex((item) => {
        return item.id === Number(idAula)
    })

    if (aulaIndex === -1){
        return res.status(404).json({erro: "Aula não encontrada."})
    }

    instrutor.aulas.splice(aulaIndex, 1)
    return res.status(204).send()
}