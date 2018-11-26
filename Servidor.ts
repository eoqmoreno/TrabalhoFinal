import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

export class Servidor{
    private cursos:Curso[] = [new Curso("Desing Digital",[new Disciplina("POO", new Professor("Andersson", "And123", "amoqueijofrito")),
    new Disciplina("EDI", new Professor("João", "joao123", "aliceEOcoelho")), 
    new Disciplina("CV", new Professor("Paulo", "paulo123", "chile")),
    new Disciplina("Desenho II", new Professor("João", "joao123", "aliceEOcoelho"))])];
    constructor(){
    }
    
    public getCursos() : Curso[] {
        return this.cursos;
    }
    public setCursos(v : Curso[]) {
        this.cursos = v;
    }
    
    public buscaCurso(curso:string): Curso|number{
        if(this.cursos.length>0){
            for(let i of this.cursos){
                if(i.getNome() == curso){
                    return i; //Retornando o Curso == i
                }
            return 1
            }
        }else{
            return 2
        }
    }
    
    public BucarDisciplina(curso:string,disc:string) : Disciplina|undefined {
        if(this.buscaCurso(curso)!=undefined){
            let curs = this.buscaCurso(curso);
            for(let i of curs.getDisciplinas()){
                if(i.getNome() == disc){
                    return i;
                }
            }
        }
    }
    
}