import express from "express";
import { openDb } from "./config/ConfigDb.js";
import cors from "cors";
import routes from './routers/index.js';

const app = express();
app.use(express.json());
app.use(cors());

import router from "./routers/routes.js"
routes(app);
// app.use(router);


export default app;