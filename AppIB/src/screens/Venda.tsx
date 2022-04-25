import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';

const Venda = () =>{
    const [cliente, setCliente] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [prazo, setPrazo] = useState('');
    const getVenda = () =>{
        var lcliente = 'Alê';
        var lvalor = 'R$ 25,00';
        var ldata = '22/03/2022';
        var lprazo = '30/03/2022';
        setPrazo(lprazo);
        setData(ldata);
        setValor(lvalor);
        setCliente(lcliente);
    }
    const Excluir = () =>{

    }
    const Editar = () =>{
        
    }
    useEffect(()=>{
        getVenda();
    })
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32}}>Cliente</Text>
            </View>
            <View style={styles.containerCorpo}>
                <View style={styles.containerTexto}>
                    <Text style={{fontSize: 16, alignSelf:'flex-start', marginHorizontal: 15, marginTop: 15}}>Cliente:</Text>
                    <View style={{flexDirection: 'row', width:'100%'}}>
                        <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>{cliente}</Text>
                        <TouchableOpacity style={{width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent:'center', backgroundColor:'#F3ABC6', marginTop:5}} onPress={Editar}>
                            <Image style={{width: 20, height: 20}} source={require('./src/img/Lapis.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 16, alignSelf:'flex-start', marginHorizontal: 15, marginTop: 15}}>Valor:</Text>
                    <View style={{flexDirection: 'row', width:'100%'}}>
                        <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>{valor}</Text>
                    </View>
                    <Text style={{fontSize: 16, alignSelf:'flex-start', marginHorizontal: 15, marginTop: 15}}>Data:</Text>
                    <View style={{flexDirection: 'row', width:'100%'}}>
                        <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>{data}</Text>
                    </View>
                    <Text style={{fontSize: 16, alignSelf:'flex-start', marginHorizontal: 15, marginTop: 15}}>Prazo:</Text>
                    <View style={{flexDirection: 'row', width:'100%'}}>
                        <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>{prazo}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', alignSelf:'center', marginBottom: -90, marginTop: 10}} onPress={Excluir}>
                        <Text style={{fontSize: 32, color:'#FF0000'}}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTop:{
        flex: 0.05,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
        marginTop: -60,
    },
    containerCorpo:{
        flex: 0.7,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
    },
    containerTexto:{
        flex: 0.1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    },
})

export default Venda;