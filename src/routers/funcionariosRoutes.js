import express from 'express';
import FuncionarioController from '../controllers/funcionarioController.js'

const router = express.Router();

router.get('/funcionarios', FuncionarioController.selectFuncionarios);
router.get('/funcionario/:id', FuncionarioController.selectFuncionario);
router.post('/funcionario', FuncionarioController.insertFuncionario);
router.put('/funcionario', FuncionarioController.updateFuncionario);
router.delete('/funcionario/:id', FuncionarioController.deleteFuncionario);

export default router;