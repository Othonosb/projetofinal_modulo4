import{openDb} from "../config/ConfigDb.js";

export async function createTable(){
    openDb()
        .then(db => {
        db.exec ('CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY, nome TEXT,cpf TEXT,idade INTEGER, email TEXT,endereco TEXT, genero TEXT, telefone INTEGER)')
    })
}

export async function insertCliente(cliente){
    console.log(cliente)
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
}

export async function updateCliente(cliente){
    
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
}

export async function selectClientes(cliente){
    
    return openDb().then(db => {
        return db.all ('SELECT * FROM Cliente')
        .then(res=>res)
    })
}

export async function selectCliente(id){
    
    return openDb().then(db => {
        return db.get ('SELECT * FROM Cliente WHERE id=?',
        [id])
        .then(res=>res)
    })
}

export async function deleteCliente(id){
    
    return openDb().then(db => {
        return db.get ('DELETE FROM Cliente WHERE id=?',
        [id])
        .then(res=>res)
    })
}