import { Disciplina } from "./Disciplina";
import { Msg } from "./Msg";

export class Curso{
    private nome:string;
    private disciplinas: Disciplina[] = new Array();
    private msgs: Msg[] = new Array();

    public constructor(nome:string){
        this.nome = nome;
    }
    
    
    public getNome() : string {
        return this.nome;
    }

    
    public setNomw(nome : string): void {
        this.nome = nome;
    }
    
    
    public BucarDisciplinas() : string {
        
    }
    
    
    
}