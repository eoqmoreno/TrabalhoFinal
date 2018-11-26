"use strict";
exports.__esModule = true;
var Msg = /** @class */ (function () {
    function Msg(user, msg) {
        this.user = user;
        this.texto = msg;
    }
    Msg.prototype.getUser = function () {
        return this.user;
    };
    Msg.prototype.setUser = function (v) {
        this.user = v;
    };
    Msg.prototype.getTexto = function () {
        return this.texto;
    };
    Msg.prototype.setTexto = function (v) {
        this.texto = v;
    };
    return Msg;
}());
exports.Msg = Msg;
