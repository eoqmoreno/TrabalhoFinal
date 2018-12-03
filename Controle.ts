import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { Servidor } from "./Servidor";
import { Disciplina } from "./Disciplina";
import { User } from "./User";
import { Adm } from "./Adm";
import { LoginErro } from "./LoginError";
import { PermissaoErro } from "./PermissaoErro";
import { JaCadastradoErro } from "./JaCadastradoErro";


export class Controle{
    private servidor:Servidor = new Servidor();
    private tipo:User = new Adm();
    constructor(){

    }

    public setTipo(tipo:User):void{
        this.tipo = tipo;
    }

    public buscarAluno(matricula:number):Aluno{
        return this.servidor.buscaAluno(matricula);
    }

    public loginAluno(matricula:number,senha:string):string{
        if(this.servidor.buscaAluno(matricula).getSenha() == senha){
            this.setTipo(this.buscarAluno(matricula));
            return "Bem vindo "+this.buscarAluno(matricula).getNome()+"!";
        }else{
            throw new LoginErro("Senha incorreta");
        }
    }

    public loginProfessor(nome:string,senha:string):string{
        if(this.servidor.buscaProfessor(nome).getSenha()==senha){
            this.setTipo(this.servidor.buscaProfessor(nome));
            return "Bem vindo professor "+this.servidor.buscaProfessor(nome).getNome()+"!";
        }else{
            throw new LoginErro("Senha incorreto!");
        }
    }
    
    public loginAdm(login:string,senha:string):string{
        if(login == "admin" && senha == "admin"){
            this.setTipo(new Adm());
            return "Bem vindo Administrador!";
        }else{
            throw new LoginErro("Senha e/ou usuário incorretos!");
        }
    }

    public addDisciplinaAluno(matricula:number,disciplina:string):void{
        if(this.tipo.getTipo() == "Adm"){
            if(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(),disciplina)!=undefined){
                this.buscarAluno(matricula).addDisciplina(this.servidor.buscaDisciplina(this.buscarAluno(matricula).getCurso().getNome(),disciplina));
            }else{
                throw new JaCadastradoErro("Disciplina já cadastrada");
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public addDisciplina(nome:string,curso:string, professor:string):string{
        if(this.tipo.getTipo() == "Adm"){
            if(this.servidor.buscaDisciplina(curso,nome)==undefined){
                if(this.servidor.nomeProfessor(professor)!=undefined){
                    this.servidor.addDisciplina(curso,new Disciplina(nome,this.servidor.buscaProfessor(professor)));
                    return "Disciplina Cadastrada";
                }
            }else{
                throw new JaCadastradoErro("Disciplina já cadastrada");                    
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public addAluno(nome:string,senha:string,login:string,curso:string,matricula:number):string{
        if(this.tipo.getTipo() == "Adm"){
            if(this.servidor.buscaAluno(matricula)==undefined){
               this.servidor.cadAluno(new Aluno(nome,senha,login,curso,matricula))
                return "Aluno cadastrado!"
            }else{
                throw new JaCadastradoErro("Usuário já cadastrado!");
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public addProfessor(nome:string,login:string,senha:string):string{
        if(this.tipo.getTipo() == "Adm"){
            if(this.servidor.buscaProfessor(login)==undefined){
                this.servidor.addProfessor(new Professor(nome,login,senha));
                return "Professor cadastrado!";
            }else{
                throw new JaCadastradoErro("Professor já cadastrado");
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public verBoletim(matricula):string{
        if(this.tipo.getTipo() == "Aluno"){
            if(this.buscarAluno(matricula)!=undefined){
                let str : string = "";
                for(let i of this.buscarAluno(matricula).getDisciplinas()){
                    str += "Disc: " + i.getNome() + " - Prof: " + i.getProfessor().getNome() +" - M: "+ i.getNota() + "\n";
                }
                return str;
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public verAlunos():string{
        if(this.tipo.getTipo() == "Adm" || this.tipo.getTipo() == "Prof"){
            let str:string = "";
            for(let i of this.servidor.getAlunos()){
                str += i.getNome() + "\n"
            }
            return str;
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }

    public verDisciplinas(curso:string):string{
        if(this.tipo.getTipo() == "Adm"){
            let str:string = "";
            for(let i of this.servidor.buscaCurso(curso).getDisciplinas()){
                str += i.getNome() + "\n"
            }
            return str;
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }
    
    public addNota(curso:string,aluno:string,nota:number):void{
        if(this.tipo.getTipo() == "Prof"){
            if(this.servidor.buscaCurso(curso)!=undefined){
                let disciplina:Disciplina;
                for(let i in this.servidor.buscaCurso(curso).getDisciplinas()){
                    if(this.servidor.buscaCurso(curso).getDisciplinas()[i].getProfessor().getLogin() == this.tipo.getLogin()){
                        disciplina = this.servidor.buscaCurso(curso).getDisciplinas()[i];
                    }
                }
                this.servidor.nomeAluno(aluno).buscarDisciplina(disciplina.getNome()).setNota(nota);
                
            }
        }else{
            throw new PermissaoErro("Você não tem permissão para executar essa ação!")
        }
    }
    

}