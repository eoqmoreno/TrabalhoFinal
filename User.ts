export abstract class User{
    private nome: string;
    private login: string;
    private senha: string;
    
    public constructor(nome:string,login:string,senha:string){
        this.login = login;
        this.nome = nome;
        this.senha = senha;
    }

    
    public getLogin() : string {
        return this.login;
    }
    public setLogin(v : string) {
        this.login = v;
    }
    
    
    public getNome() : string {
        return this.login;
    }
    public setNome(v : string) {
        this.nome = v;
    }
    
    
    public getSenha() : string {
        return this.senha;
    }
    public setSenha(v : string) {
        this.senha = v;
    }
    
    public enviarMsg(msg:string,local:string):string{
        return msg + local;        
    }

}