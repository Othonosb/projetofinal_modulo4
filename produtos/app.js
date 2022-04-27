const express = require("express");
const {randomUUID} = require("crypto");
const { request } = require("http");
const { response } = require("express");
const { json } = require("express/lib/response");
const fs = require("fs");

const app = express();

app.use(express.json());

let produtos = [];

fs.readFile("produtos.json", "utf-8", (err, data) => {
    if(err){
        console.log(err);     
    }else{
        produtos = JSON.parse(data);
    }
})

app.post("/produtos", (request, response) => {
    // Nome e Preço  => name and price

    const {name, price} = request.body;

    const produto = {
        name,
        price,
        id:randomUUID()
    };

    produtos.push(produto);

    createProdutosFile();

    return response.json(produto);
});
app.get("/produtos", (request, response) => {
    return response.json(produtos);
});

app.get("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const produto = produtos.find((produto) => produto.id === id);
    return response.json(produto);
});

app.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const produtoIndex = produtos.findIndex((produto) => produto.id === id);
    produtos[produtoIndex] = {
        ...produtos[produtoIndex],
        name,
        price,
    };

    createProdutosFile();

    return response.json({ message:"Produto alterado com sucesso!" });
});

app.delete("/produtos/:id", (request, response) => {
    const { id } = request.params;

    const produtoIndex = produtos.findIndex((produto) => produto.id === id);
    produtos.splice(produtoIndex, 1);

    createProdutosFile();

    return response.json({ message:"Produto removido com sucesso!"});
    
});

function createProdutosFile(){
    fs.writeFile("produtos.json", JSON.stringify(produtos), (err) => {
        if (err) {
            console.log(err);

        }else{
            console.log("produto Inserido");
        }
    });
}


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));



/**
 * POST => Inserir um dado      Create
 * GET => Buscar um/mais dados  Read
 * PUT =>  Alterar um dado      Update
 * DELETE => Remover um dado    Delete
 */

/** Como receber uma request
 * Body => sempre que eu quiser enviar dados para minha aplicaçao;
 * Params => /produtos/42342432432424354354566765;
 * Query => /produtos?id=432240973243209475775&value=399842759874398;
 */

