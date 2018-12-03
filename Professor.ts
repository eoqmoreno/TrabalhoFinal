import {User} from "./User";
import { Disciplina } from "./Disciplina";

export class Professor extends User{

    public constructor(nome:string, login: string,senha:string){
        super(nome,login,senha,"Prof");
    }
    public getTipo():string{
        return "Adm";
    }
}