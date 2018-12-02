declare function require(msg : string) : any;
var readline = require('readline-sync');
import {Controle} from "./Controle";

let controle = new Controle();

controle.addAluno("George","oia","oia","Design Digital", 420866)

function menu(){
    console.log("Menu: \n addAluno \n addProf \n buscarAluno \n verAluno \n loginAluno \n loginProf \n loginAdm \n addDisciplina \n addDisciplinaAluno \n verDisciplina \n menu \n sair");
}

menu();

var status:boolean = true;
while(status){
    let comando: string = readline.question("Comando: ");
switch(comando){
    case "addProf":
        let nomeProf:string = readline.question("Digite o nome: ");
        let loginProf: string = readline.question("Digita um login:")
        let senhaProf: string = readline.question("Digite uma senha:")
        console.log(controle.addProfessor(nomeProf,loginProf,senhaProf));
        break;

    case "addAluno":
        let nomeAluno: string = readline.question("Digite o nome : ");
        let loginAluno: string = readline.question("Digite um login : ");
        let senhaAluno: string = readline.question("Digite uma senha : ");
        let cursoAluno: string = readline.question("Digite o curso : ");
        let matriculaAluno: number = readline.question("Digite a matricula : ");
        console.log(controle.addAluno(nomeAluno,loginAluno,senhaAluno,cursoAluno,matriculaAluno));
        break;

    case "addDisciplinaAluno":
        let nomeDisciplina: string = readline.question("Digite o nome da Disciplina:");
        let matriculaAlu:number = readline.question("Digite a matricula : ");
        controle.addDisciplinaAluno(matriculaAlu,nomeDisciplina);
        break;

    case "addDisciplina":
        let cursoDis:string =readline.question("Digite o curso: ");
        let nomeDisc: string = readline.question("Digite o nome da Disciplina:");
        let profDisciplina:string = readline.question("Digite o nome do Professor da Dis.:")
        console.log(controle.addDisciplina(nomeDisc,cursoDis,profDisciplina));
        break;

    case "loginAluno":
        let logMatricula: number = readline.question("Digite a matricula:")
        let logSenha: string = readline.question("Digite sua senha:")
        console.log(controle.loginAluno(logMatricula,logSenha));
        break;

    case "loginProf":
        let logNome: string = readline.question("Digite o login:");
        let logProfSenha: string = readline.question("Digite a senha:");
        console.log(controle.loginProfessor(logNome,logProfSenha));
        break;

    case "loginAdm":
        let logAdmNome: string = readline.question("Digite o nome:");
        let logAdmSenha: string = readline.question("Digite a senha:");
        console.log(controle.loginAdm(logAdmNome,logAdmSenha));
        break;

    case "verDisciplina":
        let numMatricula:number = readline.question("Digite a matricula: ");
        console.log(controle.verDisciplina(numMatricula));
        break;

    case "menu":
        menu();
        break;

    case "verDisciplinas":
        let cursoDisc:string = readline.question("Digite o curso: ")
        console.log(controle.verDisciplinas(cursoDisc));
        break;
        
    case "sair":
        status = false;
        break;
}
}

