"use strict";
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(nome, disciplina) {
        this.disciplinas = new Array();
        this.msgs = new Array();
        this.nome = nome;
        this.disciplinas = disciplina;
    }
    Curso.prototype.getNome = function () {
        return this.nome;
    };
    Curso.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Curso.prototype.getDisciplinas = function () {
        return this.disciplinas;
    };
    Curso.prototype.addDisciplina = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    return Curso;
}());
exports.Curso = Curso;
