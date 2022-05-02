import db from '../data/ConfigDB.js';
import Funcionario from '../models/Funcionario.js';
import FuncionarioDAO from '../DAO/funcionarioDAO.js';
import res from 'express/lib/response.js';

const funcionarioDAO = new FuncionarioDAO(db);

export default class FuncionarioController {
    
    static async selectFuncionarios(req, res) {
        try {
            let funcionarios = await funcionarioDAO.selectFuncionarios();
            res.json(funcionarios);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectFuncionario(req, res) {
        const id = req.params.id;

        try {
            let funcionario = await funcionarioDAO.selectFuncionario(id);
            res.status(200).json(funcionario);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertFuncionario(req, res) {
        const body = req.body;
        const funcionario = new Funcionario(body.nome, body.cpf, body.idade, body.cargo, body.telefone);

        try {
            let result = await funcionarioDAO.insertFuncionario(funcionario);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateFuncionario(req, res) {
        const funcionario = req.body;

        try {
            let result = await funcionarioDAO.updateFuncionario(funcionario);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteFuncionario(req, res) {
        const id = req.params.id;

        try {
            let result = await funcionarioDAO.deleteFuncionario(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}