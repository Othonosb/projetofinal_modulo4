import db from '../data/ConfigDB.js';
import Cliente from '../models/Cliente.js';
import ClienteDAO from '../DAO/clienteDAO.js';
import res from 'express/lib/response.js';

const clienteDAO = new ClienteDAO(db);

export default class ClienteController {
    
    static async selectClientes(req, res) {
        try {
            let clientes = await clienteDAO.selectClientes();
            res.json(clientes);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectCliente(req, res) {
        const id = req.params.id;

        try {
            let cliente = await clienteDAO.selectCliente(id);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertCliente(req, res) {
        const body = req.body;
        const cliente = new Cliente(body.nome, body.cpf, body.idade, body.email, body.endereco, body.genero, body.telefone);

        try {
            let result = await clienteDAO.insertCliente(cliente);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateCliente(req, res) {
        const cliente = req.body;

        try {
            let result = await clienteDAO.updateCliente(cliente);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteCliente(req, res) {
        const id = req.params.id;

        try {
            let result = await clienteDAO.deleteCliente(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}