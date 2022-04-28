import { openDb } from "../config/ConfigDb.js";

// Criando a tabela Cliente
export async function createTableCliente(){
    openDb()
        .then(db => {
        db.exec ('CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY, nome TEXT,cpf TEXT,idade INTEGER, email TEXT,endereco TEXT, genero TEXT, telefone INTEGER)')
    })
}

export async function selectClientes(req, res){    
    openDb().then(db => {
        db.all ('SELECT * FROM Cliente')
       .then(pessoas=>res.json(pessoas))
   })
}

export async function selectCliente(req, res){
   let id = req.body.id;
   
    openDb().then(db => {
        db.get ('SELECT * FROM Cliente WHERE id=?',
       [id])
       .then(cliente=> res.json(cliente));
   })
}

export async function insertCliente(req, res){
    let cliente =req.body
    openDb()
        .then(db => {
        db.run ('INSERT INTO Cliente (nome,cpf,idade,email,endereco,genero,telefone) VALUES (?,?,?,?,?,?,?)',
        [
        cliente.nome,
        cliente.cpf,
        cliente.idade,
        cliente.email,
        cliente.endereco,
        cliente.genero,
        cliente.telefone
        ]);
    })
    res.json({
        "StatusCode" : 200
    })
}

export async function updateCliente(req, res){
    let cliente =req.body
    openDb()
        .then(db => {
        db.run ('UPDATE Cliente SET nome=?,cpf=?,idade=?,email=?,endereco=?,genero=?,telefone=? WHERE id=?',
        [
        cliente.nome,
        cliente.cpf,
        cliente.idade,
        cliente.email,
        cliente.endereco,
        cliente.genero,
        cliente.telefone,
        cliente.id
        ]);
    })
    res.json({
        "StatusCode" : 200
    })
}



export async function deleteCliente(req, res){
    let id = req.body.id;
     openDb().then(db => {
        db.get ('DELETE FROM Cliente WHERE id=?',
        [id])
        .then(res=>res)
    })
    res.json({
        "StatusCode" : 200
    })
}