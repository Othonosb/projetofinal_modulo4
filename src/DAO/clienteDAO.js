export default class ClienteDAO {

    constructor(db) {
        this.db = db;
    }

    async selectClientes() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Cliente`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectCliente(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Cliente WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertCliente(cliente) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Cliente (nome,cpf,idade,email,endereco,genero,telefone) VALUES (?,?,?,?,?,?,?)`, [cliente.nome, cliente.cpf, cliente.idade, cliente.email, cliente.endereco, cliente.genero, cliente.telefone], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Cliente inserido com sucesso`);
                }
            })
        })
    }

    async updateCliente(cliente) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Cliente SET nome = ?, cpf = ?, idade = ?, cargo = ?, telefone = ? WHERE id = ?`, [cliente.nome, cliente.cpf, cliente.idade, cliente.cargo, cliente.telefone, cliente.id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Cliente atualizado com sucesso`);
                }
            })
        })
    }

    async deleteCliente(id) {
        return await new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Cliente WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Cliente removido com sucesso`);
                }
            })
        })
    }

}