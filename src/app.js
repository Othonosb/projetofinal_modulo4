import express from "express";
import { openDb } from "./config/ConfigDb.js";
import {
  createTable,
  insertCliente,
  updateCliente,
  selectClientes,
  selectCliente,
  deleteCliente
} from "./controllers/Cliente.js";
createTable();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Projeto M4");
});

app.get("/clientes",async function (req, res) {
  let pessoas = await selectClientes();
  res.json(pessoas);
});

app.get("/cliente",async function (req, res) {
  let pessoa = await selectCliente(req.body.id);
  res.json(pessoa);
});



app.post("/cliente", (req, res) => {
  insertCliente(req.body);
  res.json({
    StatusCode: 200,
  });
});

app.put("/cliente", (req, res) => {
  if (req.body && !req.body.id) {
    res.json({
      statusCode: "400",
      msg: "Voce precisa informar um id",
    });
  } else {
    updateCliente(req.body);
    
    res.json({
      StatusCode: 200,
    });
  }
});

app.delete("/cliente",async function (req, res) {
  let pessoa = await deleteCliente(req.body.id);
  res.json(pessoa);
});

export default app;
