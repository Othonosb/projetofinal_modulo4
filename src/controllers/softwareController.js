import db from '../data/ConfigDB.js';
import Software from '../models/Software.js';
import SoftwareDAO from '../DAO/softwareDAO.js';
import res from 'express/lib/response.js';

const softwareDAO = new SoftwareDAO(db);

export default class SoftwareController {
    
    static async selectSoftwares(req, res) {
        try {
            let softwares = await softwareDAO.selectSoftwares();
            res.json(softwares);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectSoftware(req, res) {
        const id = req.params.id;

        try {
            let software = await softwareDAO.selectSoftware(id);
            res.status(200).json(software);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertSoftware(req, res) {
        const body = req.body;
        const software = new Software(body.nome, body.marca, body.preço, body.tipo);

        try {
            let result = await softwareDAO.insertSoftware(software);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateSoftware(req, res) {
        const software = req.body;

        try {
            let result = await softwareDAO.updateSoftware(software);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteSoftware(req, res) {
        const id = req.params.id;

        try {
            let result = await softwareDAO.deleteSoftware(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}