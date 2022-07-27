class Usuario{
    private login:string;
    private senha:string;
    private id:number;
    private nome:string;

    getId():number{
        return(this.id);
    }
    setId(id:number):void{
        this.id = id;
    }
    getNome():string{
        return(this.nome);
    }
    setNome(nome:string):void{
        this.nome=nome;
    }

    getLogin():string{
        return(this.login);
    }
    setLogin(login:string):void{
        this.login=login;
    }
    getSenha():string{
        return(this.senha);
    }
    setSenha(senha:string):void{
        this.senha=senha
    }

    constructor(id:number,nome:string,login:string,senha:string){
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    Buscar():Array<Usuario>{
        let listaUsuarios = new Array<Usuario>();
        return(listaUsuarios);
    }

    BuscarUnico(id:number):Usuario{
        let usuario = new Usuario();
        return(usuario);
    }

    Gravar(usuario:Usuario):boolean{

    }

    Editar(usuario:Usuario):boolean{

    }
    
    Deletar(usuario:Usuario):boolean{

    }
}