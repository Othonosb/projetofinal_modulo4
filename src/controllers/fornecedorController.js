import db from '../data/ConfigDB.js';
import Fornecedor from '../models/Fornecedor.js';
import FornecedorDAO from '../DAO/fornecedorDAO.js';
import res from 'express/lib/response.js';

const fornecedorDAO = new FornecedorDAO(db);

export default class FornecedorController {
    
    static async selectFornecedores(req, res) {
        try {
            let fornecedores = await fornecedorDAO.selectFornecedores();
            res.json(fornecedores);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectFornecedor(req, res) {
        const id = req.params.id;

        try {
            let fornecedor = await fornecedorDAO.selectFornecedor(id);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertFornecedor(req, res) {
        const body = req.body;
        const fornecedor = new Fornecedor(body.nome, body.cnpj, body.telefone);

        try {
            let result = await fornecedorDAO.insertFornecedor(fornecedor);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateFornecedor(req, res) {
        const fornecedor = req.body;

        try {
            let result = await fornecedorDAO.updateFornecedor(fornecedor);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteFornecedor(req, res) {
        const id = req.params.id;

        try {
            let result = await fornecedorDAO.deleteFornecedor(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}