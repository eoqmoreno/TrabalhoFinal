export class PermissaoErro implements Error{
    public name:string;
    public message:string;
    constructor(message:string){
        this.name = "Erro na ação";
        this.message = message;
    }
}