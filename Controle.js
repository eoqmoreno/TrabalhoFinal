"use strict";
exports.__esModule = true;
var Aluno_1 = require("./Aluno");
var Professor_1 = require("./Professor");
var Servidor_1 = require("./Servidor");
var Disciplina_1 = require("./Disciplina");
var Adm_1 = require("./Adm");
var LoginError_1 = require("./LoginError");
var PermissaoErro_1 = require("./PermissaoErro");
var Controle = /** @class */ (function () {
    function Controle() {
        this.servidor = new Servidor_1.Servidor();
        this.tipo = new Adm_1.Adm();
    }
    Controle.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Controle.prototype.buscarAluno = function (matricula) {
        return this.servidor.buscaAluno(matricula);
    };
    Controle.prototype.loginAluno = function (matricula, senha) {
        if (this.servidor.buscaAluno(matricula).getSenha() == senha) {
            this.setTipo(this.buscarAluno(matricula));
            return "Bem vindo " + this.buscarAluno(matricula).getNome() + "!";
        }
        else {
            throw new LoginError_1.LoginErro("Senha incorreta");
        }
    };
    Controle.prototype.loginProfessor = function (nome, senha) {
        if (this.servidor.buscaProfessor(nome).getSenha() == senha) {
            this.setTipo(this.servidor.buscaProfessor(nome));
            return "Bem vindo professor " + this.servidor.buscaProfessor(nome).getNome() + "!";
        }
        else {
            throw new LoginError_1.LoginErro("Senha incorreto!");
        }
    };
    Controle.prototype.loginAdm = function (login, senha) {
        if (login == "admin" && senha == "admin") {
            this.setTipo(new Adm_1.Adm());
            return "Bem vindo Administrador!";
        }
        else {
            throw new LoginError_1.LoginErro("Senha e/ou usuário incorretos!");
        }
    };
    Controle.prototype.addDisciplinaAluno = function (matricula, disciplina) {
        if (this.tipo.getTipo() == "Adm") {
            if (this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(), disciplina) != undefined) {
                this.buscarAluno(matricula).addDisciplina(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(), disciplina));
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.addDisciplina = function (nome, curso, professor) {
        if (this.tipo.getTipo() == "Adm") {
            if (this.servidor.buscaDisciplina(curso, nome) == undefined) {
                if (this.servidor.nomeProfessor(professor) != undefined) {
                    this.servidor.addDisciplina(curso, new Disciplina_1.Disciplina(nome, this.servidor.buscaProfessor(professor)));
                    return "Disciplina Cadastrada";
                }
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.addAluno = function (nome, senha, login, curso, matricula) {
        if (this.tipo.getTipo() == "Adm") {
            if (this.servidor.buscaAluno(matricula) == undefined) {
                this.servidor.cadAluno(new Aluno_1.Aluno(nome, senha, login, curso, matricula));
                return "Aluno cadastrado!";
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.addProfessor = function (nome, login, senha) {
        if (this.tipo.getTipo() == "Adm") {
            if (this.servidor.buscaProfessor(login) == undefined) {
                this.servidor.addProfessor(new Professor_1.Professor(nome, login, senha));
                return "Professor cadastrado!";
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.verBoletim = function (matricula) {
        if (this.tipo.getTipo() == "Aluno") {
            if (this.buscarAluno(matricula) != undefined) {
                var str = "";
                for (var _i = 0, _a = this.buscarAluno(matricula).getDisciplinas(); _i < _a.length; _i++) {
                    var i = _a[_i];
                    str += "Disc: " + i.getNome() + " - Prof: " + i.getProfessor().getNome() + " - M: " + i.getNota() + "\n";
                }
                return str;
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.verAlunos = function () {
        if (this.tipo.getTipo() == "Adm" || this.tipo.getTipo() == "Prof") {
            var str = "";
            for (var _i = 0, _a = this.servidor.getAlunos(); _i < _a.length; _i++) {
                var i = _a[_i];
                str += i.getNome() + "\n";
            }
            return str;
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.verDisciplinas = function (curso) {
        if (this.tipo.getTipo() == "Adm") {
            var str = "";
            for (var _i = 0, _a = this.servidor.buscaCurso(curso).getDisciplinas(); _i < _a.length; _i++) {
                var i = _a[_i];
                str += i.getNome() + "\n";
            }
            return str;
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    Controle.prototype.addNota = function (curso, aluno, nota) {
        if (this.tipo.getTipo() == "Prof") {
            if (this.servidor.buscaCurso(curso) != undefined) {
                var disciplina = void 0;
                for (var i in this.servidor.buscaCurso(curso).getDisciplinas()) {
                    if (this.servidor.buscaCurso(curso).getDisciplinas()[i].getProfessor().getLogin() == this.tipo.getLogin()) {
                        disciplina = this.servidor.buscaCurso(curso).getDisciplinas()[i];
                    }
                }
                this.servidor.nomeAluno(aluno).buscarDisciplina(disciplina.getNome()).setNota(nota);
            }
        }
        else {
            throw new PermissaoErro_1.PermissaoErro("Você não tem permissão para executar essa ação!");
        }
    };
    return Controle;
}());
exports.Controle = Controle;
