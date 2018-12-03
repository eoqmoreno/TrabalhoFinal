"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User_1 = require("./User");
var Servidor_1 = require("./Servidor");
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, senha, login, curso, matricula) {
        var _this = _super.call(this, nome, login, senha, "Aluno") || this;
        _this.servidor = new Servidor_1.Servidor();
        _this.disciplinas = new Array();
        // this.curso = curso;
        if (_this.servidor.buscaCurso(curso)) {
        }
        _this.curso = _this.servidor.buscaCurso(curso);
        _this.matricula = matricula;
        return _this;
    }
    Aluno.prototype.getTipo = function () {
        return "Adm";
    };
    Aluno.prototype.getCurso = function () {
        return this.curso;
    };
    Aluno.prototype.setCurso = function (v) {
        this.curso = v;
    };
    Aluno.prototype.getMatricula = function () {
        return this.matricula;
    };
    Aluno.prototype.setMatricula = function (v) {
        this.matricula = v;
    };
    Aluno.prototype.getDisciplinas = function () {
        return this.disciplinas;
    };
    Aluno.prototype.setDisciplinas = function (v) {
        this.disciplinas = v;
    };
    Aluno.prototype.addDisciplina = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    Aluno.prototype.buscarDisciplina = function (nome) {
        if (this.disciplinas.length > 0) {
            for (var _i = 0, _a = this.disciplinas; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getNome() == nome) {
                    return i;
                }
            }
        }
    };
    return Aluno;
}(User_1.User));
exports.Aluno = Aluno;
