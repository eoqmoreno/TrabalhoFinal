import { User } from "./User";

export class Msg{
    private user: User;
    private texto: string;

    public constructor(user:User,msg:string){
        this.user = user;
        this.texto = msg;
    }

    
    public getUser() : User {
        return this.user;
    }
    public setUser(v : User) {
        this.user = v;
    }
    
    public getTexto() : string {
        return this.texto;
    }
    public setTexto(v : string) {
        this.texto = v;
    }

}