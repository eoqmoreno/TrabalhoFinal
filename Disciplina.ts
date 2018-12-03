import { Professor } from "./Professor";
export class Disciplina{
    private nome:string;
    private professor: Professor;
    private nota:number;

    constructor(nome:string,professor:Professor){
        this.nome = nome;
        this.professor = professor;
        this.nota = 0;
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

    public getNota() : number {
        return this.nota;
    }
    
    public setNota(v : number) {
        this.nota = v;
    }
    
    
}