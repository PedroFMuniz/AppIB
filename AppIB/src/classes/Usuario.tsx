import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import Firebase from '../config';

export class Usuario{
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

    async Buscar():Promise<Array<Usuario>>{
        let listaUsuarios = new Array<Usuario>();
        const usuarios = [];
        const querySnapshot = await getDocs(collection(Firebase, "Usuarios"));
        querySnapshot.forEach((doc) => {
            usuarios.push({ ...doc.data()});
        });
        usuarios.forEach((item) =>{
            let usuario = new Usuario(item.id, item.nome, item.login, item.senha);
            listaUsuarios.push(usuario);
        })
        return(listaUsuarios);
    }
    
    async BuscarUnico(id:number):Promise<Usuario>{
        const usuariosRef = collection(Firebase, "Usuarios");
        const q = query(usuariosRef, where("id", "==", id));
        const usuarios = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuarios .push({ ...doc.data()});
        });
        const c = usuarios[0];
        let usuario = new Usuario(c.id,c.nome,c.login,c.senha);
        return(usuario);
    }
    
    async Gravar(usuario:Usuario):Promise<void>{
        await setDoc(doc(Firebase, "Usuarios", usuario.id.toString()), {
            id:usuario.id,
            nome:usuario.nome,
            login:usuario.login,
            senha:usuario.senha,
          });
    }
    
    async Editar(usuario:Usuario):Promise<void>{
        await setDoc(doc(Firebase, "Usuarios", usuario.id.toString()), {
            id:usuario.id,
            nome:usuario.nome,
            login:usuario.login,
            senha:usuario.senha,
          });
    }
    
    async Deletar(usuario:Usuario):Promise<void>{
        await deleteDoc(doc(Firebase, "Usuarios", usuario.id.toString()));
    }
}