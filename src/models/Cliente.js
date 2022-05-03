export default class Cliente {

    constructor(nome,cpf,idade,email,endereco,genero,telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.email = email;
        this.endereco = endereco;
        this.genero = genero;
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