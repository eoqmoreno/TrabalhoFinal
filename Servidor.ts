import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";
import { Aluno } from "./Aluno";

export class Servidor{
    private cursos:Curso[] = [new Curso("Design Digital",[new Disciplina("POO", new Professor("Andersson", "And123", "amoqueijofrito")),
    new Disciplina("EDI", new Professor("João", "joao1", "aliceEOcoelho")), 
    new Disciplina("CV", new Professor("Paulo", "paulo1", "chile")),
    new Disciplina("Desenho II", new Professor("Zé Neto", "Ze1", "caixas"))])];
    
    private alunos: Aluno[] = [new Aluno("George","oia","George1","Design Digital", 420866),
    new Aluno("Ana", "pao","Ana1","Design Digital",418267),
    new Aluno("Alice","italia","Alice1","Design Digital", 420065),
    new Aluno("Gabriel","bolinha de batata","Gabriel1","Design Digital", 42579)];

    private professores: Professor[] = [new Professor("João", "joao1", "aliceEOcoelho"),
    new Professor("Paulo", "paulo1", "chile"),
    new Professor("Zé Neto", "Ze1", "caixas")];

    public constructor(){
    }
    
    public getCursos() : Curso[] {
        return this.cursos;
    }
    public setCursos(v : Curso[]) {
        this.cursos = v;
        
    }

    public getProfessor() : Professor[] {
        return this.professores;
    }
    public setProfessor(v : Professor[]) {
        this.professores= v;
        
    }
    
    public getAlunos():Aluno[]{
        return this.alunos;
    }

    public buscaCurso(curso:string): Curso|undefined{
        if(this.cursos.length>0){
            for(let i of this.cursos){
                if(i.getNome() == curso){
                    return i; //Retornando o Curso == i
                }
            }
        }
    }
    
    public buscaDisciplina(curso:string,disc:string) : Disciplina|undefined {
        if(this.buscaCurso(curso)!=undefined){
            let curs = this.buscaCurso(curso);
            for(let i of curs.getDisciplinas()){
                if(i.getNome() == disc){
                    return i;
                }
            }
        }
    }

    public cadAluno(aluno:Aluno):void{
        this.alunos.push(aluno);
    }

    public buscaAluno(matricula:number):Aluno{
        if(this.alunos.length>0){
            for(let i of this.alunos){
                if(i.getMatricula() == matricula){
                    return i;
                }
            }
        }
    }
    
}