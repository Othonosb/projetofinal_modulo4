import db from '../data/ConfigDB.js';
import Hardware from '../models/Hardware';
import HardwareDAO from '../DAO/hardwareDAO';
import res from 'express/lib/response.js';

const hardwareDAO = new HardwareDAO(db);

export default class HardwareController{

    //Criando a tabela dos Hardware
    static async createTableHardware() {
        openDb()
            .then(db => {
                db.exec('CREATE TABLE IF NOT EXISTS Hardware (id INTEGER PRIMARY KEY, nome TEXT, marca TEXT, preço INTEGER, tipo TEXT)')
            })
    }
    //Selecionar todos cadastros

    static async  selectHardwares(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Hardware')
            .then(hardwares => res.json(hardwares))
    })
}

    //Seleção por ID do Produtos-Hardwares

    static async selectHardware(req, res) {
    let id = req.params.id;

    openDb()
        .then(db => db.get(`SELECT * FROM Hardware WHERE ID = ?`, [id]))
        .then(hardwares => res.json(hardwares))
}

    //Inserir novos Hardwares

    static async  insertHardware(req, res) {
    let Hardware = req.body
    openDb()
        .then(db => {
            db.run('INSERT INTO Hardware (nome,marca,preço,tipo) VALUES (?,?,?,?)',
                [
                    Hardware.nome,
                    Hardware.marca,
                    Hardware.preço,
                    Hardware.tipo,
                ]);
        })
    res.status(200).json("Produto cadastro com sucesso!")
}

//Implementação do UPDATE dos Produtos-Hardwares

    static  async  updateHardware(req, res) {
    let Hardware = req.body
    openDb()
        .then(db => {
            db.run('UPDATE Hardware SET nome=?,marca=?,preço=?,tipo=? WHERE id=?',
                [
                    Hardware.nome,
                    Hardware.marca,
                    Hardware.preço,
                    Hardware.tipo,
                    Hardware.id
                ]);
        })
   res.status(200).json("Produto atualizado com sucesso!")
    
}

//Implementação do DELETE dos Produtos-Hardwares

    static async deleteHardware(req, res) {
    let id = req.params.id;

    openDb()
        .then(db => db.get(`DELETE FROM Hardware WHERE ID = ?`, [id]))

    res.status(200).json("Produto deletado com sucesso!")
    
}
}