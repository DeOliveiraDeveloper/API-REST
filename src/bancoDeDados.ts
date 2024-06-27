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
    instrutores: TInstrutores[]
}

export const bancoDeDados: TBancoDeDados = {
    proximoID: 5,
    instrutores: [
        { 
            id: 1, 
            nome: "João", 
            email: 30,
            aulas: []
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