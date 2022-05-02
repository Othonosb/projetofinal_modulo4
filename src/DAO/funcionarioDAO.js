export default class FuncionarioDAO {

    constructor(db) {
        this.db = db;
    }

    async selectFuncionarios() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Funcionario`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectFuncionario(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Funcionario WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertFuncionario(funcionario) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Funcionario (nome, cpf, idade, cargo, telefone) VALUES (?,?,?,?,?)`, [funcionario.nome, funcionario.cpf, funcionario.idade, funcionario.cargo, funcionario.telefone], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Funcionário inserido com sucesso`);
                }
            })
        })
    }

    async updateFuncionario(funcionario) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Funcionario SET nome = ?, cpf = ?, idade = ?, cargo = ?, telefone = ? WHERE id = ?`, [funcionario.nome, funcionario.cpf, funcionario.idade, funcionario.cargo, funcionario.telefone, funcionario.id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Funcionário atualizado com sucesso`);
                }
            })
        })
    }

    async deleteFuncionario(id) {
        return await new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Funcionario WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Funcionário removido com sucesso`);
                }
            })
        })
    }

}