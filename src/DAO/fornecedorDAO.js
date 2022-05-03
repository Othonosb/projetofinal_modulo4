export default class FornecedorDAO {

    constructor(db) {
        this.db = db;
    }

    async selectFornecedores() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Fornecedor`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectFornecedor(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Fornecedor WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertFornecedor(fornecedor) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Fornecedor (nome,cnpj,telefone) VALUES (?,?,?)`, [fornecedor.nome, fornecedor.cnpj, fornecedor.telefone], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Fornecedor inserido com sucesso`);
                }
            })
        })
    }

    async updateFornecedor(fornecedor) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Fornecedor SET nome = ?, cnpj = ?, telefone = ? WHERE id = ?`, [fornecedor.nome, fornecedor.cnpj, fornecedor.telefone, fornecedor.id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Fornecedor atualizado com sucesso`);
                }
            })
        })
    }

    async deleteFornecedor(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Fornecedor WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Fornecedor removido com sucesso`);
                }
            })
        })
    }

}