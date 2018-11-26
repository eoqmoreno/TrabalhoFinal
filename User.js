"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(nome, login, senha) {
        this.login = login;
        this.nome = nome;
        this.senha = senha;
    }
    User.prototype.getLogin = function () {
        return this.login;
    };
    User.prototype.setLogin = function (v) {
        this.login = v;
    };
    User.prototype.getNome = function () {
        return this.login;
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
    User.prototype.enviarMsg = function (msg, local) {
        return msg + local;
    };
    return User;
}());
exports.User = User;
