type TId = number;

type TAulas = {
    id: number;
    nome: string;
}

type TInstrutores = {
    id: number;
    nome: string;
    email: number;
    aulas?: TAulas[]
}

type TBancoDeDados = {
    proximoID: TId;
    proximoIDAula: TId
    instrutores: TInstrutores[]
}

export const bancoDeDados: TBancoDeDados = {
    proximoID: 5,
    proximoIDAula: 2,
    instrutores: [
        { 
            id: 1, 
            nome: "João", 
            email: 30,
            aulas: [
                { id: 1, nome: 'Aula de API REST'}
            ]
        },
        { 
            id: 2, 
            nome: "Maria", 
            email: 25,
            aulas: []
        },
        { 
            id: 3, 
            nome: "Pedro", 
            email: 40,
            aulas: []
        },
        { 
            id: 4, 
            nome: "Ana", 
            email: 35,
            aulas: []
        },
    ]
}