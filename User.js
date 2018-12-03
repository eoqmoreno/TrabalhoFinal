"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(nome, login, senha, tipo) {
        this.login = login;
        this.nome = nome;
        this.senha = senha;
        this.tipo = tipo;
    }
    User.prototype.getLogin = function () {
        return this.login;
    };
    User.prototype.setLogin = function (v) {
        this.login = v;
    };
    User.prototype.getNome = function () {
        return this.nome;
    };
    User.prototype.setNome = function (v) {
        this.nome = v;
    };
    User.prototype.getSenha = function () {
        return this.senha;
    };
    User.prototype.setSenha = function (v) {
        this.senha = v;
    };
    User.prototype.getTipo = function () {
        return this.tipo;
    };
    User.prototype.enviarMsg = function (msg, local) {
        return msg + local;
    };
    return User;
}());
exports.User = User;
