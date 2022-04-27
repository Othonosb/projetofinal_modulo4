import{openDb} from "../config/ConfigDb.js";

export async function createTable(){
    openDb()
        .then(db => {
        db.exec ('CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY, nome TEXT,cpf TEXT,idade INTEGER, email TEXT,endereço TEXT, genero TEXT, telefone INTEGER)')
    })
}

export async function insertCliente(cliente){
    openDb()
        .then(db => {
        db.run ('INSERT INTO Cliente (nome,cpf,idade,email,endereço,genero,telefone) VALUES (?,?,?,?,?,?,?)',
        [
        cliente.nome,
        cliente.cpf,
        cliente.idade,
        cliente.email,
        cliente.endereço,
        cliente.genero,
        cliente.telefone
        ]);
    })
}

export async function updateCliente(cliente){
    openDb()
        .then(db => {
        db.run ('UPDATE Cliente SET nome=?,cpf=?,idade=?,email=?,endereço=?,genero=?,telefone=? WHERE id=?',
        [
        cliente.nome,
        cliente.idade,
        cliente.email,
        cliente.endereço,
        cliente.genero,
        cliente.telefone,
        cliente.id
        ]);
    })
}