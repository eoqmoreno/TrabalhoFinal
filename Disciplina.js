"use strict";
exports.__esModule = true;
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, professor) {
        this.msgs = new Array();
        this.nome = nome;
        this.professor = professor;
    }
    Disciplina.prototype.getMsgs = function () {
        return this.msgs;
    };
    Disciplina.prototype.setMsgs = function (msgs) {
        this.msgs = msgs;
    };
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
    return Disciplina;
}());
exports.Disciplina = Disciplina;
