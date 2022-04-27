import express from "express";
import {openDb} from "./config/ConfigDb.js"
import {createTable, insertCliente, updateCliente} from "./controllers/Cliente.js"
createTable();

const app = express(); 
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Projeto M4');
  }) 
app.post('/cliente', (req, res) => {
  insertCliente(req.body);
  res.json({
    "StatusCode": 200
  })
})





  export default app;