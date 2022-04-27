const http = require("http");

/** Como criar um servidor */
http
    .createServer((request,response) => {
        response.writeHead(200, {'Content-Type':'application/json'});
/** Como mapear as urls  */
        if(request.url == '/produto'){
            response.end(JSON.stringify({
                message:"Rota de Produto"
            }))
        }

        if(request.url === '/usuario'){
            response.end(JSON.stringify({
                message:"Rota de Usuarios"
            }))
        }

        response.end(
            JSON.stringify({
                message:"Qualquer outra rota",
            })
        );
    })
    .listen(4001, () => console.log("Servidor está roandao na porta 4001"));


    



  
