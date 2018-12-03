"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var Controle_1 = require("./Controle");
var controle = new Controle_1.Controle();
controle.addAluno("George", "oia", "oia", "Design Digital", 420866);
function menu() {
    console.log("Menu: \n addAluno \n addProf \n loginAluno \n loginProf \n loginAdm \n addDisciplina \n addDisciplinaAluno \n verDisciplina \n addNota \n menu \n sair");
}
menu();
var status = true;
while (status) {
    var comando = readline.question("Comando: ");
    switch (comando) {
        case "addProf":
            var nomeProf = readline.question("Digite o nome: ");
            var loginProf = readline.question("Digita um login:");
            var senhaProf = readline.question("Digite uma senha:");
            console.log(controle.addProfessor(nomeProf, loginProf, senhaProf));
            break;
        case "addAluno":
            var nomeAluno = readline.question("Digite o nome : ");
            var loginAluno = readline.question("Digite um login : ");
            var senhaAluno = readline.question("Digite uma senha : ");
            var cursoAluno = readline.question("Digite o curso : ");
            var matriculaAluno = readline.question("Digite a matricula : ");
            console.log(controle.addAluno(nomeAluno, loginAluno, senhaAluno, cursoAluno, matriculaAluno));
            break;
        case "addDisciplinaAluno":
            var nomeDisciplina = readline.question("Digite o nome da Disciplina:");
            var matriculaAlu = readline.question("Digite a matricula : ");
            controle.addDisciplinaAluno(matriculaAlu, nomeDisciplina);
            break;
        case "addDisciplina":
            var cursoDis = readline.question("Digite o curso: ");
            var nomeDisc = readline.question("Digite o nome da Disciplina:");
            var profDisciplina = readline.question("Digite o nome do Professor da Dis.:");
            console.log(controle.addDisciplina(nomeDisc, cursoDis, profDisciplina));
            break;
        case "loginAluno":
            var logMatricula = readline.question("Digite a matricula:");
            var logSenha = readline.question("Digite sua senha:");
            console.log(controle.loginAluno(logMatricula, logSenha));
            break;
        case "loginProf":
            var logNome = readline.question("Digite o login:");
            var logProfSenha = readline.question("Digite a senha:");
            console.log(controle.loginProfessor(logNome, logProfSenha));
            break;
        case "loginAdm":
            var logAdmNome = readline.question("Digite o nome:");
            var logAdmSenha = readline.question("Digite a senha:");
            console.log(controle.loginAdm(logAdmNome, logAdmSenha));
            break;
        case "verDisciplina":
            var numMatricula = readline.question("Digite a matricula: ");
            console.log(controle.verDisciplina(numMatricula));
            break;
        case "menu":
            menu();
            break;
        case "verDisciplinas":
            var cursoDisc = readline.question("Digite o curso: ");
            console.log(controle.verDisciplinas(cursoDisc));
            break;
        case "addNota":
            var cursoNota = readline.question("Digite o curso: ");
            var alunoNota = readline.question("Digite o nome do aluno: ");
            var nota = readline.question("Digite a nota: ");
            controle.addNota(cursoNota, alunoNota, nota);
            break;
        case "sair":
            status = false;
            break;
    }
}
