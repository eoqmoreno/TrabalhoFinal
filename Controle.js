"use strict";
exports.__esModule = true;
var Aluno_1 = require("./Aluno");
var Professor_1 = require("./Professor");
var Servidor_1 = require("./Servidor");
var Disciplina_1 = require("./Disciplina");
var Controle = /** @class */ (function () {
    function Controle() {
        this.servidor = new Servidor_1.Servidor();
        this.tipo = "Adm";
    }
    Controle.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Controle.prototype.buscarAluno = function (matricula) {
        return this.servidor.buscaAluno(matricula);
    };
    Controle.prototype.loginAluno = function (matricula, senha) {
        if (this.servidor.buscaAluno(matricula).getSenha() == senha) {
            this.setTipo(this.buscarAluno(matricula).getTipo());
            return "Bem vindo " + this.buscarAluno(matricula).getNome() + "!";
        }
    };
    Controle.prototype.loginProfessor = function (nome, senha) {
        if (this.servidor.buscaProfessor(nome).getSenha() == senha) {
            this.setTipo(this.servidor.buscaProfessor(nome).getTipo());
            return "Bem vindo professor " + this.servidor.buscaProfessor(nome).getNome() + "!";
        }
    };
    Controle.prototype.loginAdm = function (login, senha) {
        if (login == "admin" && senha == "admin") {
            this.setTipo("Adm");
            return "Bem vindo Administrador!";
        }
    };
    Controle.prototype.addDisciplinaAluno = function (matricula, disciplina) {
        if (this.tipo == "Adm") {
            if (this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(), disciplina) != undefined) {
                this.buscarAluno(matricula).addDisciplina(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(), disciplina));
            }
        }
    };
    Controle.prototype.addDisciplina = function (nome, curso, professor) {
        if (this.tipo == "Adm") {
            if (this.servidor.buscaDisciplina(curso, nome) == undefined) {
                if (this.servidor.nomeProfessor(professor) != undefined) {
                    this.servidor.addDisciplina(curso, new Disciplina_1.Disciplina(nome, this.servidor.buscaProfessor(professor)));
                    return "Disciplina Cadastrada";
                }
                return "Professor not found";
            }
        }
    };
    Controle.prototype.addAluno = function (nome, senha, login, curso, matricula) {
        if (this.tipo == "Adm") {
            if (this.servidor.buscaAluno(matricula) == undefined) {
                this.servidor.cadAluno(new Aluno_1.Aluno(nome, senha, login, curso, matricula));
                return "Aluno cadastrado!";
            }
        }
    };
    Controle.prototype.addProfessor = function (nome, login, senha) {
        if (this.tipo == "Adm") {
            if (this.servidor.buscaProfessor(login) == undefined) {
                this.servidor.addProfessor(new Professor_1.Professor(nome, login, senha));
                return "Professor cadastrado!";
            }
        }
    };
    Controle.prototype.verDisciplina = function (matricula) {
        if (this.buscarAluno(matricula) != undefined) {
            var str = "";
            for (var _i = 0, _a = this.buscarAluno(matricula).getDisciplinas(); _i < _a.length; _i++) {
                var i = _a[_i];
                str += "Disciplina: " + i.getNome() + " - Professor: " + i.getProfessor().getNome() + "\n";
            }
            return str;
        }
    };
    Controle.prototype.verAlunos = function () {
        if (this.tipo == "Adm") {
            var str = "";
            for (var _i = 0, _a = this.servidor.getAlunos(); _i < _a.length; _i++) {
                var i = _a[_i];
                str += i.getNome() + "\n";
            }
            return str;
        }
    };
    Controle.prototype.verDisciplinas = function (curso) {
        if (this.tipo == "Adm") {
            var str = "";
            for (var _i = 0, _a = this.servidor.buscaCurso(curso).getDisciplinas(); _i < _a.length; _i++) {
                var i = _a[_i];
                str += i.getNome() + "\n";
            }
            return str;
        }
    };
    return Controle;
}());
exports.Controle = Controle;
