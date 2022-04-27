import express from "express";
import {openDb} from "./config/ConfigDb.js"

openDb();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Projeto M4');
  }) 
app.post('/pessoa', (req, res) => {
  console.log("req.body");
  res.json({
    "StatusCode": 200
  })
})



  export default app;