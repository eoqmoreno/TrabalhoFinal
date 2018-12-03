import {User} from "./User";
import { Disciplina } from "./Disciplina";

export class Adm extends User{
    private disciplinas:Disciplina[] = new Array();

    public constructor(){
        super("Administrador","admin","admin","Adm");
    }    
}