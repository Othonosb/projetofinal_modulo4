import app from './src/app.js'
import fs from "fs";
import https from "https";
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
})

https.createServer({
    cert: fs.readFileSync('./src/SSL/code.crt'),
    key: fs.readFileSync('./src/SSL/code.key')
}, app).listen(3001,()=> console.log('rodando em https'));
