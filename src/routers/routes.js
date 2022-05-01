import { Router } from "express";
import {
    createTableCliente,
    insertCliente,
    updateCliente,
    selectClientes,
    selectCliente,
    deleteCliente
  } from "../controllers/Cliente.js";
  import FuncionarioController from "../controllers/Funcionario.js";

  const router = Router();
  router.get('/', (req, res) => {
    res.json({
      "statusCode": 200,
      "message": "API rodando"
    })
  })
  
  // Cliente
  router.get('/clientes',selectClientes);
  router.get('/cliente/:id',selectCliente);
  router.post('/cliente',insertCliente);
  router.put('/cliente',updateCliente);
  router.delete('/cliente/:id',deleteCliente);

  // Funcionário
  router.get('/funcionarios', FuncionarioController.selectFuncionarios);
  router.get('/funcionario/:id', FuncionarioController.selectFuncionario);
  router.post('/funcionario', FuncionarioController.insertFuncionario);
  router.put('/funcionario', FuncionarioController.updateFuncionario);
  router.delete('/funcionario/:id', FuncionarioController.deleteFuncionario);

  export default router;