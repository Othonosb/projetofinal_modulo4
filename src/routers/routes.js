import { Router } from "express";
import {
    createTableCliente,
    insertCliente,
    updateCliente,
    selectClientes,
    selectCliente,
    deleteCliente
  } from "../controllers/Cliente.js";
  import { selectFuncionarios, selectFuncionario, insertFuncionario, updateFuncionario, deleteFuncionario } from "../controllers/Funcionario.js";

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
  router.get('/funcionarios', selectFuncionarios);
  router.get('/funcionario/:id', selectFuncionario);
  router.post('/funcionario', insertFuncionario);
  router.put('/funcionario', updateFuncionario);
  router.delete('/funcionario/:id', deleteFuncionario);

  export default router;