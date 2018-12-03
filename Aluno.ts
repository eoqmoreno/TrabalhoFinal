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
        super(nome, login,senha,"Aluno");
        // this.curso = curso;
        if(this.servidor.buscaCurso(curso)){
            
        }
        this.curso = this.servidor.buscaCurso(curso);
        this.matricula = matricula;
    }

    public getTipo():string{
        return "Adm";
    }
    
    public getCurso() : Curso {
        return this.curso;
    }
    public setCurso(v : Curso): void {
        this.curso = v;
    }
    
    public getMatricula() : number {
        return this.matricula;
    }
    public setMatricula(v : number): void {
        this.matricula = v;
    }
    
    public getDisciplinas() : Disciplina[] {
        return this.disciplinas;
    }
    public setDisciplinas(v : Disciplina[]): void {
        this.disciplinas = v;
    }

    public addDisciplina(disciplina:Disciplina):void{
        this.disciplinas.push(disciplina);
    }

    public buscarDisciplina(nome:string):Disciplina{
        if(this.disciplinas.length>0){
            for(let i of this.disciplinas){
                if(i.getNome() == nome){
                    return i;
                }
            }
        }
    }    
}