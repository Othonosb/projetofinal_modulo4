export default class Fornecedor {

    constructor(nome, cnpj,telefone) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.telefone = this.validaTelefone(telefone);
    }

    validaTelefone(telefone) {
        let string = telefone.toString();
        if (string.length != 11) {
            throw new Error("Digite um número de telefone válido, com DDD.");
        } else {
            return telefone;
        }
    }
}