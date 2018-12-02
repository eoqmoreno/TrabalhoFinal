import {User} from "./User";
import { Disciplina } from "./Disciplina";
import { Curso } from "./Curso";
import { Servidor } from "./Servidor";

export class Aluno extends User{
    private curso: Curso;
    private matricula: number;
    private servidor:Servidor = new Servidor();
    private disciplinas:Disciplina[] = new Array();
    public constructor(nome:string, senha:string, login: string, curso:string, matricula:number){
        super(nome, login,senha);
        // this.curso = curso;
        if(this.servidor.buscaCurso(curso)){
            
        }
        this.curso = this.servidor.buscaCurso(curso);
        this.matricula = matricula;
    }
    
    
    public enviarMsg(msg:string, local: string):string{
        return super.enviarMsg(msg,local);
    }

    public getTipo():string{
        return "Aluno"
    }

    public getCurso() : Curso {
        return this.curso;
    }
    public setCurso(v : Curso) {
        this.curso = v;
    }
    
    public getMatricula() : number {
        return this.matricula;
    }
    public setMatricula(v : number) {
        this.matricula = v;
    }
    
    public getDisciplinas() : Disciplina[] {
        return this.disciplinas;
    }
    public setDisciplinas(v : Disciplina[]) {
        this.disciplinas = v;
    }

    public addDisciplina(disciplina:Disciplina){
        this.disciplinas.push(disciplina);
    }
    public remDisciplinas(nome:string){
        if(this.buscarDisciplina(nome)!=undefined){
            for(let i in this.disciplinas){
                if(this.disciplinas[i] == this.buscarDisciplina(nome)){
                    this.disciplinas.splice(Number(i),1);
                }
            }
        }    
    }

    public buscarDisciplina(nome:string):Disciplina|undefined{
        if(this.disciplinas.length>0){
            for(let i of this.disciplinas){
                if(i.getNome() == nome){
                    return i;
                }
            }
        }
    }    
}