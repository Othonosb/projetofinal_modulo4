import db from '../data/ConfigDB.js';
import Hardware from '../models/Hardware.js';
import HardwareDAO from '../DAO/hardwareDAO.js';
import res from 'express/lib/response.js';

const hardwareDAO = new HardwareDAO(db);

export default class HardwareController {

    static async selectHardwares(req, res) {
        try {
            let hardwares = await hardwareDAO.selectHardwares();
            res.json(hardwares);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectHardware(req, res) {
        const id = req.params.id;

        try {
            let hardware = await hardwareDAO.selectHardware(id);
            res.status(200).json(hardware);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertHardware(req, res) {
        const body = req.body;
        const hardware = new Hardware(body.nome, body.marca, body.preço, body.tipo);

        try {
            let result = await hardwareDAO.insertHardware(hardware);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateHardware(req, res) {
        const hardware = req.body;

        try {
            let result = await hardwareDAO.updateHardware(hardware);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }


    static async deleteHardware(req, res) {
    const id = req.params.id;

    try {
        let result = await hardwareDAO.deleteHardware(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
    }
    }
