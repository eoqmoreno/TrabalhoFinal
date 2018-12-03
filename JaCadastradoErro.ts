export class JaCadastradoErro implements Error{
    public name:string;
    public message:string;
    constructor(message:string){
        this.name = "Erro ao cadastrar";
        this.message = message;
    }
}