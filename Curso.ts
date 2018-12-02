import { Disciplina } from "./Disciplina";
import { Msg } from "./Msg";

export class Curso{
    private nome:string;
    private disciplinas: Disciplina[] = new Array();
    private msgs: Msg[] = new Array();

    public constructor(nome:string, disciplina: Disciplina[]){
        this.nome = nome;
        this.disciplinas = disciplina;
    }
    
    
    public getNome() : string {
        return this.nome;
    }
    public setNome(nome : string): void {
        this.nome = nome;
    }
    
    
    public getDisciplinas() : Disciplina[] {
        return this.disciplinas;
    }
    
    public addDisciplina(disciplina:Disciplina):void{
        this.disciplinas.push(disciplina);
    }
    
    
}