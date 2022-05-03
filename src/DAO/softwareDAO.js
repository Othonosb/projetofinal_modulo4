export default class SoftwareDAO {

    constructor(db) {
        this.db = db;
    }

    async selectSoftwares() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Software`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectSoftware(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Software WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertSoftware(Software) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Software (nome,marca,preço,tipo) VALUES (?,?,?,?)`, [Software.nome, Software.marca, Software.preço,Software.tipo], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto inserido com sucesso`);
                }
            })
        })
    }

    async updateSoftware(Software) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Software SET nome=?, marca=?,preço=?,tipo=? WHERE id=?`,[Software.nome, Software.marca, Software.preço,Software.id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto atualizado com sucesso`);
                }
            })
        })
    }

    async deleteSoftware(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Software WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto removido com sucesso`);
                }
            })
        })
    }

}