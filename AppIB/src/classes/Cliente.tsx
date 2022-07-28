import Firebase from '../config';
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Usuario } from './Usuario';

export class Cliente{
    private id:number;
    private nome:string;
    private usuario:Usuario;

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
    getUsuario():Usuario{
        return(this.usuario);
    }
    setUsuario(usuario:Usuario){
        this.usuario = usuario;
    }

    constructor(id:number, nome:string, usuario:Usuario){
        this.id = id;
        this.nome = nome;
        this.usuario = usuario;
    }

    async Buscar():Promise<Array<Cliente>>{
        let listaClientes = new Array<Cliente>();
        let usuario = new Usuario(0, 'padrao', 'padrao', 'padrao');
        let usuarios = await usuario.Buscar();
        const clientes = [];
        const querySnapshot = await getDocs(collection(Firebase, "Clientes"));
        querySnapshot.forEach((doc) => {
            clientes.push({ ...doc.data()});
        });
        clientes.forEach((item) =>{
            
            let cliente = new Cliente(item.id, item.nome, usuarios[usuarios.findIndex(u=>u.getId() == item.idUsuario)]);
            listaClientes.push(cliente);
        })
        return(listaClientes);
    }

    async BuscarUnico(id:number):Promise<Cliente>{
        const clientesRef = collection(Firebase, "Clientes");
        const q = query(clientesRef, where("id", "==", id));
        const clientes = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            clientes .push({ ...doc.data()});
        });
        const c = clientes[0];
        let usuario = new Usuario(0, 'padrao', 'padrao', 'padrao');
        let cliente = new Cliente(c.id,c.nome, await usuario.BuscarUnico(c.idUsuario));
        return(cliente);
    }

    async Gravar(cliente:Cliente):Promise<void>{
        await setDoc(doc(Firebase, "Clientes", cliente.id.toString()), {
            id:cliente.id,
            nome:cliente.nome,
            idUsuario:cliente.usuario.getId(),
          });
    }

    async Editar(cliente:Cliente):Promise<void>{
        await setDoc(doc(Firebase, "Clientes", cliente.id.toString()), {
            id:cliente.id,
            nome:cliente.nome,
            idUsuario:cliente.usuario.getId(),
          });
    }

    async Deletar(cliente:Cliente):Promise<void>{
        await deleteDoc(doc(Firebase, "Clientes", cliente.id.toString()));
    }
}