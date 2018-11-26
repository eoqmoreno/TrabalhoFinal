import { Msg } from "./Msg";
import { Professor } from "./Professor";
export class Disciplina{
    private msgs: Msg[]= new Array();
    private nome:string;
    private professor: Professor;

    constructor(nome:string,professor:Professor){
        this.nome = nome;
        this.professor = professor;
    }

    public getMsgs(): Msg[] {
        return this.msgs;
    }

    public setMsgs (msgs : Msg[]) {
        this.msgs = msgs;
    }

    public getNome() : string {
        return this.nome; 
    }
    
    public setNome(nome: string) {
        this.nome = nome;
    }
    
    public getProfessor() : Professor{
        return this.professor;
    }
    
    public setProfessor(professor: Professor) {
        this.professor = professor;
    }
    
}