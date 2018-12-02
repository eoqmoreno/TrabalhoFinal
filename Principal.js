"use strict";
exports.__esModule = true;
var Controle_1 = require("./Controle");
var controle = new Controle_1.Controle();
controle.addAluno("George", "oia", "oia", "Design Digital", 420866);
controle.addDisciplina(420866, "EDI");
console.log(controle.verDisciplina(420866));
