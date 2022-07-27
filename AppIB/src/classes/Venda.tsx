class Venda{
    private id:number;
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
    setValor(valor:number):void{
        this.valor = valor;
    }
    setData(data:Date):void{
        this.data=data;
    }
    setPrazo(prazo:Date):void{
        this.prazo=prazo;
    }

    constructor(id:number,cliente:Cliente,valor:number,data:Date,prazo:Date){
        this.id = id;
        this.cliente = cliente;
        this.valor = valor;
        this.data = data;
        this.prazo = prazo;
    }

    Buscar():Array<Venda>{
        let listaVendas = new Array<Venda>();
        return(listaVendas);
    }
    
    BuscarUnico(id:number):Venda{
        let venda = new Venda();
        return(venda);
    }
    
    Gravar(venda:Venda):boolean{
    
    }
    
    Editar(venda:Venda):boolean{
    
    }
    
    Deletar(venda:Venda):boolean{
    
    }
}