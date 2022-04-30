import express from "express";
import { openDb } from "./config/ConfigDb.js";
import { createTableFuncionario } from "./controllers/Funcionario.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

import router from "./routers/routes.js"
app.use(router);


export default app;