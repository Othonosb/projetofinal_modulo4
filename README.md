# Projeto final: Módulo 4 <br> REST API — Loja de informática 💻

#### **Sobre o projeto**

---

* Utilização de padrão **MVC** e design pattern **DAO**
* Arquitetura **REST**
* Operações **CRUD**
* Feito em Node.js: **Express, Nodemon, SQLite**

#### **Instruções de instalação**

---

*Para o uso da aplicação, é requerido em sua máquina a presença de [Git](https://git-scm.com/downloads) e [Node.js](https://nodejs.org/en/download/ "Versão utilizada no projeto: 16.14.2").*<br>

#### Protocolo SSH:

> `git clone git@github.com:Othonosb/projetofinal_modulo4.git`

#### Protocolo HTTPS:

> `https://github.com/Othonosb/projetofinal_modulo4.git`

Para a instalação das **dependências** do projeto, execute o comando `npm install` em seu terminal, dentro da pasta onde os arquivos foram salvos. Ao executar este comando, será instalada toda a estrutura necessária e descrita no arquivo `package.json` para o pleno funcionamento do software.<br>

Para criar o banco de dados e preenchê-lo com dados predefinidos, execute em seu terminal o comando `node ./src/data/CreateDB.js`.<br>

Por fim, para executar o projeto, o comando `node server.js` deve ser inserido no terminal.<br>

#### **Rotas**
---

**As entidades disponíveis no banco de dados são: cliente, funcionário, fornecedor, hardware e software.**

- **GET**
    - **Consulte todas as instâncias da entidade**
        - `'/clientes'` || `'/funcionarios'` || `'/fornecedores'` || `'/hardwares'` || `'/softwares'`
    - **Consulte uma instância específica através de seu id**
        - `'/cliente'` || `'/funcionario'` || `'/fornecedor'` || `'/hardware'` || `'/software'` + /{insira aqui a id desejada}
- **POST**
    - **Insira uma instância na entidade**
        - `'/cliente'` || `'/funcionario'` || `'/fornecedor'` || `'/hardware'` || `'/software'`
- **PUT**
    - **Atualize uma instância já existente**
        - `'/cliente'` || `'/funcionario'` || `'/fornecedor'` || `'/hardware'` || `'/software'`
- **DELETE**
    - **Remova uma instância específica através de seu id**
        - `'/cliente'` || `'/funcionario'` || `'/fornecedor'` || `'/hardware'` || `'/software'` + /{insira aqui a id desejada}

*A operação GET pode ser acessada através de seu navegador de preferência, enquanto que para a utilização das demais é recomendado fazer as requisições por meio de API clients como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).*

#### **Deploy**

---

Para interagir com a API sem a necessidade de instalação local, o endereço https://projeto-final-m4.herokuapp.com/ pode ser acessado, seguindo as mesmas instruções de rota sinalizadas acima.

#### **Participantes**

---

* [Douglas Andrade](https://github.com/dougandra)
* [Giovanni Clayton](https://github.com/Gclayton0207)
* [Maria Rita Santana](https://github.com/55021)
* [Othon Botelho](https://github.com/Othonosb)
* [Victor Barros](https://github.com/victorb26)
