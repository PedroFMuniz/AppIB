import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Home = () => {
    const getBorboleta = () =>{
        const foto = '../img/borboleta.png';
        return(require(foto));
    };
    const getFoto = () =>{
        const foto = '../src/img/foto.png';
        return(require(foto));
    };
    const getText = () =>{
        const nome = "Mirtys";
        return('Olá, ' + nome);
    };
    const getBorboletas = () =>{
        const count = "3";
        return(count+"x");
    }
    const getVendas = () =>{
        const count = "1.000,00";
        return('R$ ' + count);
    }
    const getGanhos = () =>{
        const count = "300,00";
        return('R$ ' + count);
    }
    const getNivel = () =>{
        const count = "3";
        return(count);
    }
    const btnClientes = () =>{

    }
    const btnVendas = () =>{

    }
    const btnPerfil = () =>{

    }
    return(
        <View style={styles.container}>
            <View style={styles.containerBorboleta}>
                <Text style={styles.textoBorboleta}>{getBorboletas()}</Text>
                <Image style={styles.borboleta} source={getBorboleta()}></Image>
            </View>
            <View style={styles.containerElements}>
                <Image style={styles.foto} source={getFoto()}></Image>
            </View>
            <View style={styles.containerElements}>
                <Text style={styles.texto}>{getText()}</Text>
            </View>
            <View style={styles.containerElements}>
                <View style={styles.infoContainer}>
                    <View style={{flex: 0.7, borderBottomColor: '#FFFFFF', borderBottomWidth:5, padding: 10}}>
                        <Text style={{fontSize: 30, color:'#FFFFFF'}}>Vendas do mês:</Text>
                        <Text style={{fontSize: 30, color:'#FFFFFF', marginLeft:10}}>{getVendas()}</Text>
                        <Text style={{fontSize: 30, color:'#FFFFFF'}}>Ganhos:</Text>
                        <Text style={{fontSize: 30, color:'#FFFFFF', marginLeft:10}}>{getGanhos()}</Text>
                    </View>
                    <View style={{flex: 0.3, paddingHorizontal: 10, justifyContent:'center'}}>
                    <Text style={{fontSize: 30, color:'#FFFFFF'}}>Seu nível: {getNivel()}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerElements}>
                <View style={styles.containerMenu}>
                    <TouchableOpacity style={styles.botaoMenu} onPress={btnClientes}>
                        <Image style={{width: 42, height: 64}} source={require('../src/img/btnClientes.png')}/>
                        <Text>Clientes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoMenu} onPress={btnVendas}>
                        <Image style={{width: 90, height: 74}} source={require('../src/img/btnVendas.png')}/>
                        <Text>Vendas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoMenu} onPress={btnPerfil}>
                        <Image style={{width: 68, height: 68}} source={require('../src/img/btnPerfil.png')}/>
                        <Text>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerElements:{
        justifyContent: 'center',
        width:'100%',
        alignItems:'center'
    },
    containerBorboleta:{
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent: 'flex-end',
        marginTop: 40,
    },
    foto:{
        width: 230,
        height: 230,
        borderColor: '#F3ABC6',
        borderWidth: 3,
        borderRadius: 230/2,
    },
    texto:{
        fontSize: 40,
        fontWeight: 'bold',
    },
    textoBorboleta:{
        fontSize: 25,
    },
    borboleta:{
        width: 40,
        height: 40,
        marginRight:30,
        marginLeft: 5,
    },
    infoContainer:{
        height: '60%',
        width: '80%',
        backgroundColor: '#F3ABC6',
        borderRadius: 30,
        marginTop: -100,
    },
    containerMenu:{
        height: '100%',
        flexDirection: 'row',
        flex: 1,
        alignItems:'center',
        borderTopWidth: 3,
        borderColor: '#000000',
        marginTop: -70,
    },
    botaoMenu:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: -40
    }
});

export default Home;