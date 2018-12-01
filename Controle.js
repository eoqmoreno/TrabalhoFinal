"use strict";
exports.__esModule = true;
var Aluno_1 = require("./Aluno");
var Servidor_1 = require("./Servidor");
var Controle = /** @class */ (function () {
    function Controle() {
        this.servidor = new Servidor_1.Servidor();
    }
    Controle.prototype.addAluno = function (nome, senha, login, curso, matricula) {
        this.servidor.cadAluno(new Aluno_1.Aluno(nome, senha, login, curso, matricula));
    };
    Controle.prototype.buscarAluno = function (matricula) {
        return this.servidor.buscaAluno(matricula);
    };
    Controle.prototype.verAlunos = function () {
        return this.servidor.getAlunos();
    };
    Controle.prototype.loginAluno = function (matricula, senha) {
        if (this.servidor.buscaAluno(matricula).getSenha() == senha) {
            return "Login efetuado";
        }
    };
    Controle.prototype.loginProfessor = function (nome, senha) {
    };
    Controle.prototype.loginAdm = function (login, senha) {
        if (login == "admin" && senha == "admin") {
            return "Login efetuado";
        }
        else {
            return "erro";
        }
    };
    return Controle;
}());
exports.Controle = Controle;