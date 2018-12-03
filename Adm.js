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
var Adm = /** @class */ (function (_super) {
    __extends(Adm, _super);
    function Adm() {
        return _super.call(this, "Administrador", "admin", "admin", "Adm") || this;
    }
    Adm.prototype.getTipo = function () {
        return "Adm";
    };
    return Adm;
}(User_1.User));
exports.Adm = Adm;
