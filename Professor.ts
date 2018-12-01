import {User} from "./User";
import { Disciplina } from "./Disciplina";

export class Professor extends User{
    private disciplinas:Disciplina[] = new Array();

    public constructor(nome:string, senha:string, login: string){
        super(nome,login,senha);
    }

    
}