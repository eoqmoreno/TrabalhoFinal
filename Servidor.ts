import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";
import { Aluno } from "./Aluno";

export class Servidor{
    private cursos:Curso[] = [new Curso("Design Digital",
    [new Disciplina("POO", new Professor("Andersson", "And123", "amoqueijofrito")),
    new Disciplina("EDI", new Professor("João", "joao1", "aliceEOcoelho")), 
    new Disciplina("CV", new Professor("Paulo", "paulo1", "chile")),
    new Disciplina("Desenho II", new Professor("Zé Neto", "Ze1", "caixas"))])];

    private alunos:Aluno[] = new Array();

    private professores: Professor[] = [new Professor("João", "joao1", "aliceEOcoelho"),
    new Professor("Paulo", "paulo1", "chile"),
    new Professor("Zé Neto", "Ze1", "caixas")];
    
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

    public buscaCurso(curso:string): Curso{
        if(this.cursos.length>0){
            for(let i of this.cursos){
                if(i.getNome() == curso){
                    return i; //Retornando o Curso == i
                }
            }
        }
    }
    
    public buscaDisciplina(curso:string,disc:string) : Disciplina{
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

    public nomeAluno(nome:string):Aluno{
        if(this.alunos.length>0){
            for(let i of this.alunos){
                if(i.getNome() == nome){
                    return i;
                }
            }
        }
    }

    public buscaProfessor(login:string):Professor{
        if(this.professores.length>0){
            for(let i of this.professores){
                if(i.getLogin() == login){
                    return i;
                }
            }
        }
    }

    public nomeProfessor(nome:string):Professor{
        if(this.professores.length>0){
            for(let i of this.professores){
                if(i.getNome() == nome){
                    return i;
                }
            }
        }
    }

    public addProfessor(professor:Professor):void{
        if(this.buscaProfessor(professor.getNome())==undefined){
            this.professores.push(professor);
        }
    }
    
    public addDisciplina(curso:string,disciplina:Disciplina):void{
        if(this.buscaCurso(curso)!=undefined){
            if(this.buscaDisciplina(curso,disciplina.getNome())==undefined){
                this.buscaCurso(curso).addDisciplina(disciplina);
            }
        }
    }
}