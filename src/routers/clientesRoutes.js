import express from 'express';
import ClienteController from '../controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', ClienteController.selectClientes);
router.get('/cliente/:id', ClienteController.selectCliente);
router.post('/cliente', ClienteController.insertCliente);
router.put('/cliente', ClienteController.updateCliente);
router.delete('/cliente/:id', ClienteController.deleteCliente);

export default router;