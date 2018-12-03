import {User} from "./User";
import { Disciplina } from "./Disciplina";

export class Adm extends User{

    public constructor(){
        super("Administrador","admin","admin","Adm");
    }    

    public getTipo():string{
        return "Adm";
    }
}