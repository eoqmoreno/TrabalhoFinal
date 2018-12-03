export class LoginErro implements Error{
    public name:string;
    public message:string;
    constructor(message:string){
        this.name = "Erro ao logar";
        this.message = message;
    }
}