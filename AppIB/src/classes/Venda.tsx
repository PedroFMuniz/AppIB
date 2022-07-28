import {Cliente} from './Cliente';
import {Usuario} from './Usuario';
import Firebase from '../config';
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

export class Venda{
    private id:number;
    private usuario:Usuario;
    private cliente:Cliente;
    private valor:number;
    private data:Date;
    private prazo:Date;

    getId():number{
        return(this.id);
    }
    getCliente():Cliente{
        return(this.cliente);
    }
    getUsuario():Usuario{
        return(this.usuario);
    }
    getValor():number{
        return(this.valor);
    }
    getData():Date{
        return(this.data);
    }
    getPrazo():Date{
        return(this.prazo);
    }
    setId(id:number):void{
        this.id=id;
    }
    setCliente(cliente:Cliente):void{
        this.cliente=cliente;
    }
    setUsuario(usuario:Usuario):void{
        this.usuario = usuario;
    }
    setValor(valor:number):void{
        this.valor = valor;
    }
    setData(data:Date):void{
        this.data=data;
    }
    setPrazo(prazo:Date):void{
        this.prazo=prazo;
    }

    constructor(id:number,cliente:Cliente,usuario:Usuario,valor:number,data:Date,prazo:Date){
        this.id = id;
        this.cliente = cliente;
        this.valor = valor;
        this.data = data;
        this.prazo = prazo;
        this.usuario = usuario;
    }

    async Buscar():Promise<Array<Venda>>{
        let listaVendas = new Array<Venda>();
        let usuario = new Usuario(0,'padrao','padrao','padrao');
        let cliente = new Cliente(0, 'padrao', usuario);
        let usuarios = await usuario.Buscar();
        let clientes = await cliente.Buscar();
        const vendas = [];
        const querySnapshot = await getDocs(collection(Firebase, "Vendas"));
        querySnapshot.forEach((doc) => {
            vendas.push({ ...doc.data()});
        });
        vendas.forEach((item) =>{
            let date = new Date(item.data);
            let dtPrazo = new Date(item.prazo);
            let venda = new Venda(item.id, clientes[clientes.findIndex(c => c.getId() == item.idCliente)] , usuarios[usuarios.findIndex(u => u.getId() == item.idUsuario)], item.valor, date, dtPrazo);
            listaVendas.push(venda);
        })
        return(listaVendas);
    }
    
    async BuscarUnico(id:number):Promise<Venda>{
        const vendasRef = collection(Firebase, "Vendas");
        const q = query(vendasRef, where("id", "==", id));
        const vendas = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            vendas .push({ ...doc.data()});
        });
        const c = vendas[0];
        let usuario = new Usuario(0,'padrao','padrao','padrao');
        let cliente = new Cliente(0, 'padrao', usuario);
        let venda = new Venda(c.id, await cliente.BuscarUnico(c.idCliente), await usuario.BuscarUnico(c.idUsuario), c.valor, c.data, c.prazo);
        return(venda);
    }
    
    async Gravar(venda:Venda):Promise<void>{
        await setDoc(doc(Firebase, "Vendas", venda.id.toString()), {
            id:venda.id,
            idUsuario:venda.usuario.getId(),
            idCliente:venda.cliente.getId(),
            valor:venda.valor,
            data:venda.data.toDateString(),
            prazo:venda.prazo.toDateString(),
          });
    }
    
    async Editar(venda:Venda):Promise<void>{
        await setDoc(doc(Firebase, "Vendas", venda.id.toString()), {
            id:venda.id,
            idUsuario:venda.usuario.getId(),
            idCliente:venda.cliente.getId(),
            valor:venda.valor,
            data:venda.data.toDateString(),
            prazo:venda.prazo.toDateString(),
          });
    }
    
    async Deletar(venda:Venda):Promise<void>{
        await deleteDoc(doc(Firebase, "Vendas", venda.id.toString()));
    }
}