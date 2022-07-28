import Firebase from '../config';
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";

export class Cliente{
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

    constructor(id:number, nome:string){
        this.id = id;
        this.nome = nome;
    }

    async Buscar():Promise<Array<Cliente>>{
        let listaClientes = new Array<Cliente>();
        const clientes = [];
        const querySnapshot = await getDocs(collection(Firebase, "Clientes"));
        querySnapshot.forEach((doc) => {
            clientes.push({ ...doc.data()});
        });
        clientes.forEach((item) =>{
            let cliente = new Cliente(item.id, item.nome);
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
            clientes.push({ ...doc.data()});
        });
        const c = clientes[0];
        let cliente = new Cliente(c.id,c.nome);
        return(cliente);
    }

    async Gravar(cliente:Cliente):Promise<void>{
        await setDoc(doc(Firebase, "Clientes", cliente.id.toString()), {
            id:cliente.id,
            nome:cliente.nome,
          });
    }

    async Editar(cliente:Cliente):Promise<void>{
        await setDoc(doc(Firebase, "Clientes", cliente.id.toString()), {
            id:cliente.id,
            nome:cliente.nome,
          });
    }

    async Deletar(cliente:Cliente):Promise<void>{
        await deleteDoc(doc(Firebase, "Clientes", cliente.id.toString()));
    }
}