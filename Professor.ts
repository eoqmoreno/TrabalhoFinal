import {User} from "./User";
import { Disciplina } from "./Disciplina";

export class Professor extends User{
    private disciplinas:Disciplina[] = new Array();

    public constructor(nome:string, login: string,senha:string){
        super(nome,login,senha);
    }

    public getTipo():string{
        return "Prof"
    }
    
}