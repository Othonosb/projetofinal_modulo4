import { openDb } from "../config/ConfigDb.js";

// Criando a tabela Funcionario
export async function createTableFuncionario() {
    openDb()
    .then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Funcionario ( id INTEGER PRIMARY KEY, nome TEXT, cpf TEXT, idade INTEGER, cargo TEXT, telefone INTEGER )`)
    })
}

export async function selectFuncionarios(req, res) {
    openDb()
        .then(db => db.all(`SELECT * FROM Funcionario`))
        .then(funcionarios => res.json(funcionarios))
}

export async function selectFuncionario(req, res) {
    let id = req.params.id;

    openDb()
        .then(db => db.get(`SELECT * FROM Funcionario WHERE ID = ?`, [id]))
        .then(funcionario => res.json(funcionario))
}

export async function insertFuncionario(req, res) {
    let funcionario = req.body;

    openDb()
        .then(db => {
            db.run(`INSERT INTO Funcionario (nome, cpf, idade, cargo, telefone) VALUES (?,?,?,?,?)`, [funcionario.nome, funcionario.cpf, funcionario.idade, funcionario.cargo, funcionario.telefone]);
        });
    res.json({
        "statusCode": 200
    });
}

export async function updateFuncionario(req, res) {
    let funcionario = req.body;
    openDb()
        .then(db => {
            db.run(`UPDATE Funcionario SET nome = ?, cpf = ?, idade = ?, cargo = ?, telefone = ? WHERE id = ?`, [funcionario.nome, funcionario.cpf, funcionario.idade, funcionario.cargo, funcionario.telefone, funcionario.id]);
        });
    res.json({
        "statusCode": 200
    });
}

export async function deleteFuncionario(req, res) {
    let id = req.params.id;
    
    openDb()
        .then(db => db.get(`DELETE FROM Funcionario WHERE ID = ?`, [id]))
        // .then(res => res);
    res.json({
        "statusCode": 200
    });
}