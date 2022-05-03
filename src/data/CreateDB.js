import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/data/database.db');

const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS Funcionario
    ( id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf TEXT,
    idade INTEGER,
    cargo TEXT,
    telefone INTEGER )`;

const CLIENTES_SCHEMA = `CREATE TABLE IF NOT EXISTS Cliente
    ( id INTEGER PRIMARY KEY,
    nome TEXT,
    cpf TEXT,
    idade INTEGER,
    email TEXT,
    endereco TEXT,
    genero TEXT,
    telefone INTEGER )`;

const FORNECEDOR_SCHEMA = `CREATE TABLE IF NOT EXISTS Fornecedor
    ( id INTEGER PRIMARY KEY,
    nome TEXT,
    cnpj TEXT,
    telefone INTEGER )`;

const HARDWARE_SCHEMA = `CREATE TABLE IF NOT EXISTS Hardware
    (id INTEGER PRIMARY KEY,
    nome TEXT,
    marca TEXT,
    preço INTEGER,
    tipo TEXT)`;

const SOFTWARE_SCHEMA = `CREATE TABLE IF NOT EXISTS Software
    (id INTEGER PRIMARY KEY,
    nome TEXT,
    marca TEXT,
    preço INTEGER,
    tipo TEXT)`

function createTableFuncionario() {
        db.run(FUNCIONARIOS_SCHEMA, error => {
            if (error) {
                console.log(error);                
            }
        })
}

function createTableCliente() {
    db.run(CLIENTES_SCHEMA, error => {
        if (error) {
            console.log(error);
        }
    })
}

function createTableHardware() {
    db.run(HARDWARE_SCHEMA, error => {
        if (error) {
            console.log(error);
        }
    })
}

function createTableFornecedor() {
    db.run(FORNECEDOR_SCHEMA, error => {
        if (error) {
            console.log(error);
        }
    })
}

function createTableSoftware() {
    db.run(SOFTWARE_SCHEMA, error => {
        if (error) {
            console.log(error);
        }
    })
}

db.serialize(()=> {
    createTableFuncionario();
    createTableCliente();
    createTableHardware();
    createTableFornecedor();
    createTableSoftware();
});