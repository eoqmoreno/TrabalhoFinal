"use strict";
exports.__esModule = true;
var Curso_1 = require("./Curso");
var Disciplina_1 = require("./Disciplina");
var Professor_1 = require("./Professor");
var Servidor = /** @class */ (function () {
    function Servidor() {
        this.cursos = [new Curso_1.Curso("Desing Digital", [new Disciplina_1.Disciplina("POO", new Professor_1.Professor("Andersson", "And123", "amoqueijofrito")),
                new Disciplina_1.Disciplina("EDI", new Professor_1.Professor("João", "joao123", "aliceEOcoelho")),
                new Disciplina_1.Disciplina("CV", new Professor_1.Professor("Paulo", "paulo123", "chile")),
                new Disciplina_1.Disciplina("Desenho II", new Professor_1.Professor("João", "joao123", "aliceEOcoelho"))])];
    }
    Servidor.prototype.getCursos = function () {
        return this.cursos;
    };
    Servidor.prototype.setCursos = function (v) {
        this.cursos = v;
    };
    Servidor.prototype.buscaCurso = function (curso) {
        if (this.cursos.length > 0) {
            for (var _i = 0, _a = this.cursos; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getNome() == curso) {
                    return i; //Retornando o Curso == i
                }
                return 1;
            }
        }
        else {
            return 2;
        }
    };
    Servidor.prototype.BucarDisciplina = function (curso, disc) {
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
    return Servidor;
}());
exports.Servidor = Servidor;
