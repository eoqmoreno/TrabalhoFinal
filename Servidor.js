"use strict";
exports.__esModule = true;
var Curso_1 = require("./Curso");
var Disciplina_1 = require("./Disciplina");
var Professor_1 = require("./Professor");
var Servidor = /** @class */ (function () {
    function Servidor() {
        this.cursos = [new Curso_1.Curso("Design Digital", [new Disciplina_1.Disciplina("POO", new Professor_1.Professor("Andersson", "And123", "amoqueijofrito")),
                new Disciplina_1.Disciplina("EDI", new Professor_1.Professor("João", "joao1", "aliceEOcoelho")),
                new Disciplina_1.Disciplina("CV", new Professor_1.Professor("Paulo", "paulo1", "chile")),
                new Disciplina_1.Disciplina("Desenho II", new Professor_1.Professor("Zé Neto", "Ze1", "caixas"))])];
        this.alunos = new Array();
        this.professores = [new Professor_1.Professor("João", "joao1", "aliceEOcoelho"),
            new Professor_1.Professor("Paulo", "paulo1", "chile"),
            new Professor_1.Professor("Zé Neto", "Ze1", "caixas")];
    }
    Servidor.prototype.getCursos = function () {
        return this.cursos;
    };
    Servidor.prototype.setCursos = function (v) {
        this.cursos = v;
    };
    Servidor.prototype.getProfessor = function () {
        return this.professores;
    };
    Servidor.prototype.setProfessor = function (v) {
        this.professores = v;
    };
    Servidor.prototype.getAlunos = function () {
        return this.alunos;
    };
    Servidor.prototype.buscaCurso = function (curso) {
        if (this.cursos.length > 0) {
            for (var _i = 0, _a = this.cursos; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getNome() == curso) {
                    return i; //Retornando o Curso == i
                }
            }
        }
    };
    Servidor.prototype.buscaDisciplina = function (curso, disc) {
        if (this.buscaCurso(curso) != undefined) {
            var curs = this.buscaCurso(curso);
            for (var _i = 0, _a = curs.getDisciplinas(); _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getNome() == disc) {
                    return i;
                }
            }
        }
    };
    Servidor.prototype.cadAluno = function (aluno) {
        this.alunos.push(aluno);
    };
    Servidor.prototype.buscaAluno = function (matricula) {
        if (this.alunos.length > 0) {
            for (var _i = 0, _a = this.alunos; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getMatricula() == matricula) {
                    return i;
                }
            }
        }
    };
    Servidor.prototype.buscaProfessor = function (login) {
        if (this.professores.length > 0) {
            for (var _i = 0, _a = this.professores; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getLogin() == login) {
                    return i;
                }
            }
        }
    };
    Servidor.prototype.nomeProfessor = function (nome) {
        if (this.professores.length > 0) {
            for (var _i = 0, _a = this.professores; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getNome() == nome) {
                    return i;
                }
            }
        }
    };
    Servidor.prototype.addProfessor = function (professor) {
        if (this.buscaProfessor(professor.getNome()) == undefined) {
            this.professores.push(professor);
        }
    };
    Servidor.prototype.addDisciplina = function (curso, disciplina) {
        if (this.buscaCurso(curso) != undefined) {
            if (this.buscaDisciplina(curso, disciplina.getNome()) == undefined) {
                this.buscaCurso(curso).addDisciplina(disciplina);
            }
        }
    };
    return Servidor;
}());
exports.Servidor = Servidor;
