import express from 'express';
import FornecedorController from '../controllers/fornecedorController.js';

const router = express.Router();

router.get('/fornecedores', FornecedorController.selectFornecedores);
router.get('/fornecedor/:id', FornecedorController.selectFornecedor);
router.post('/fornecedor', FornecedorController.insertFornecedor);
router.put('/fornecedor', FornecedorController.updateFornecedor);
router.delete('/fornecedor/:id', FornecedorController.deleteFornecedor);

export default router;