import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { Servidor } from "./Servidor";
import { Msg } from "./Msg";
import { Disciplina } from "./Disciplina";

export class Controle{
    private servidor:Servidor = new Servidor();

    constructor(){

    }

    public addAluno(nome:string,senha:string,login:string,curso:string,matricula:number):void{
        this.servidor.cadAluno(new Aluno(nome,senha,login,curso,matricula))
    }


    public buscarAluno(matricula:number):Aluno{
        return this.servidor.buscaAluno(matricula);
    }

    public verAlunos():Aluno[]{
        return this.servidor.getAlunos();
    }

    public loginAluno(matricula:number,senha:string):string{
        if(this.servidor.buscaAluno(matricula).getSenha() == senha){
            return "Login efetuado";
        }
    }

    public loginProfessor(nome:string,senha:string):void{
    }
    
    public loginAdm(login:string,senha:string):string{
        if(login == "admin" && senha == "admin"){
            return "Login efetuado";
        }else{
            return "erro";
        }
    }

}