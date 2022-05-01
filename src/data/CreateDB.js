import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS Funcionario
    ( id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf TEXT,
    idade INTEGER,
    cargo TEXT,
    telefone INTEGER )`;

function createTableFuncionario() {
    try {
        db.run(`CREATE TABLE IF NOT EXISTS Funcionario ( id INTEGER PRIMARY KEY, nome TEXT, cpf TEXT, idade INTEGER, cargo TEXT, telefone INTEGER )`)
    } catch (err) {
        console.error(err);
    }
}

function createTableCliente() {
    try {
        db.run(`CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY, nome TEXT,cpf TEXT,idade INTEGER, email TEXT,endereco TEXT, genero TEXT, telefone INTEGER)`)
    } catch (err) {
        console.error(err);
    }
}

db.serialize( ()=> {
    createTableFuncionario();
    createTableCliente();
});