import express from "express";
import { openDb } from "./config/ConfigDb.js";
import { createTableFuncionario } from "./controllers/Funcionario.js";


const app = express();
app.use(express.json());

import router from "./routers/routes.js"
app.use(router);

export default app;