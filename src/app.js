import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.status(200).send('Projeto M4');
  }) 




  export default app;