export default class Funcionario {

    constructor(nome, cpf, idade, cargo, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.cargo = cargo;
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