import { Router } from "express";
import {
    createTable,
    insertCliente,
    updateCliente,
    selectClientes,
    selectCliente,
    deleteCliente
  } from "../controllers/Cliente.js";

  const router = Router();
  router.get('/', (req, res) => {
    res.json({
      "statusCode": 200,
      "message": "API rodando"
    })
  })
  
  router.get('/clientes',selectClientes);
  router.get('/cliente',selectCliente);
  router.post('/cliente',insertCliente);
  router.put('/cliente',updateCliente);
  router.delete('/cliente',deleteCliente);
  






  export default router;