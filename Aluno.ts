import {User} from "./User";
import { Disciplina } from "./Disciplina";
import { Curso } from "./Curso";

export class Aluno extends User{
    private disciplinas: Disciplina[] = new Array();
    private curso: Curso;
    private matricula: number;
    public constructor(nome:string, senha:string, login: string, curso:Curso, matricula:number){
        super(nome, login,senha);
        this.curso = curso;
        this.matricula = matricula;
    }

    public enviarMsg(msg:string, local: string):string{
        return super.enviarMsg(msg,local);
    }

    
    public getCurso() : Curso {
        return Curso;
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
    
}