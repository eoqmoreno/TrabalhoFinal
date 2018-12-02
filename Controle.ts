import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { Servidor } from "./Servidor";
import { Msg } from "./Msg";
import { Disciplina } from "./Disciplina";

export class Controle{
    private servidor:Servidor = new Servidor();
    private tipo:string = "Adm";
    constructor(){

    }

    public setTipo(tipo:string):void{
        this.tipo = tipo;
    }

    public buscarAluno(matricula:number):Aluno{
        return this.servidor.buscaAluno(matricula);
    }

    public loginAluno(matricula:number,senha:string):string{
        if(this.servidor.buscaAluno(matricula).getSenha() == senha){
            this.setTipo(this.buscarAluno(matricula).getTipo());
            return "Bem vindo "+this.buscarAluno(matricula).getNome()+"!";
        }
    }

    public loginProfessor(nome:string,senha:string):string{
        if(this.servidor.buscaProfessor(nome).getSenha()==senha){
            this.setTipo(this.servidor.buscaProfessor(nome).getTipo());
            return "Bem vindo professor "+this.servidor.buscaProfessor(nome).getNome()+"!";
        }
    }
    
    public loginAdm(login:string,senha:string):string{
        if(login == "admin" && senha == "admin"){
            this.setTipo("Adm");
            return "Bem vindo Administrador!";
        }
    }

    public addDisciplinaAluno(matricula:number,disciplina:string):void{
        if(this.tipo == "Adm"){
            if(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(),disciplina)!=undefined){
                this.buscarAluno(matricula).addDisciplina(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(),disciplina));
            }
        }
    }

    public addDisciplina(nome:string,curso:string, professor:string):string{
        if(this.tipo == "Adm"){
            if(this.servidor.buscaDisciplina(curso,nome)==undefined){
                if(this.servidor.nomeProfessor(professor)!=undefined){
                    this.servidor.addDisciplina(curso,new Disciplina(nome,this.servidor.buscaProfessor(professor)));
                    return "Disciplina Cadastrada";
                }
                return "Professor not found";
            }
        }
    }

    public addAluno(nome:string,senha:string,login:string,curso:string,matricula:number):string{
        if(this.tipo == "Adm"){
            this.servidor.cadAluno(new Aluno(nome,senha,login,curso,matricula))
            return "Aluno cadastrado!"
        }
    }

    public addProfessor(nome:string,login:string,senha:string):string{
        if(this.tipo == "Adm"){
            this.servidor.addProfessor(new Professor(nome,login,senha));
            return "Professor cadastrado!";
        }
    }

    public verDisciplina(matricula):string{
        if(this.buscarAluno(matricula)!=undefined){
            let str : string = "";
            for(let i of this.buscarAluno(matricula).getDisciplinas()){
                str += "Disciplina: " + i.getNome() + " - Professor: " + i.getProfessor().getNome() + "\n";
            }
            return str;
        }
    }

    public verAlunos():string{
        if(this.tipo == "Adm"){
            let str:string = "";
            for(let i of this.servidor.getAlunos()){
                str += i.getNome() + "\n"
            }
            return str;
        }
    }

    public verDisciplinas(curso:string):string{
        if(this.tipo == "Adm"){
            let str:string = "";
            for(let i of this.servidor.buscaCurso(curso).getDisciplinas()){
                str += i.getNome() + "\n"
            }
            return str;
        }
    }
}