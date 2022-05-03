export default class HardwareDAO {

    constructor(db) {
        this.db = db;
    }

    async selectHardwares() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Hardware`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectHardware(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Hardware WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertHardware(Hardware) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Hardware (nome,marca,preço,tipo) VALUES (?,?,?,?)`, [Hardware.nome, Hardware.marca, Hardware.preço,Hardware.tipo], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto inserido com sucesso`);
                }
            })
        })
    }

    async updateHardware(Hardware) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Hardware SET nome=?, marca=?,preço=?,tipo=? WHERE id=?`,[Hardware.nome, Hardware.marca, Hardware.preço,Hardware.id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto atualizado com sucesso`);
                }
            })
        })
    }

    async deleteHardware(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Hardware WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Produto removido com sucesso`);
                }
            })
        })
    }
}



