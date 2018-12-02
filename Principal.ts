import {Controle} from "./Controle";

let controle = new Controle();

controle.addAluno("George","oia","oia","Design Digital",420866)
controle.addDisciplina(420866,"EDI");
console.log(controle.verDisciplina(420866));