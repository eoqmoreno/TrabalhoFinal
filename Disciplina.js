"use strict";
exports.__esModule = true;
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, professor) {
        this.nome = nome;
        this.professor = professor;
        this.nota = 0;
    }
    Disciplina.prototype.getNome = function () {
        return this.nome;
    };
    Disciplina.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Disciplina.prototype.getProfessor = function () {
        return this.professor;
    };
    Disciplina.prototype.setProfessor = function (professor) {
        this.professor = professor;
    };
    Disciplina.prototype.getNota = function () {
        return this.nota;
    };
    Disciplina.prototype.setNota = function (v) {
        this.nota = v;
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
