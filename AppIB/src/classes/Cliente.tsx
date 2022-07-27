import Firebase from '../config';
import { collection, getDocs } from "firebase/firestore";

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

    BuscarUnico(id:number):Cliente{
        let cliente = new Cliente();
        return(cliente);
    }

    Gravar(cliente:Cliente):boolean{

    }

    Editar(cliente:Cliente):boolean{

    }

    Deletar(cliente:Cliente):boolean{

    }
}