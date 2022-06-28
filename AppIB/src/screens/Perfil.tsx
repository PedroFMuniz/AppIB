import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const Perfil = () => {
    const getBorboleta = () =>{
        const foto = '../img/borboleta.png';
        return(require(foto));
    };
    const getFoto = () =>{
        const foto = '../img/foto.png';
        return(require(foto));
    };
    const getText = () =>{
        const nome = "Mirtys";
        return(nome);
    };
    const getBorboletas = () =>{
        const count = "3";
        return(count+"x");
    };
    const btnPerfil = () =>{

    }
    const btnBorboletas = () =>{

    }
    const btnVendas = () =>{

    }
    const btnRecebimentos = () =>{

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
                <TouchableOpacity style={styles.botao} onPress={btnPerfil}>
                    <Text style={styles.textoBotao}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={btnBorboletas}>
                    <Text style={styles.textoBotao}>Resgatar borboletas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={btnVendas}>
                    <Text style={styles.textoBotao}>Vendas anteriores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={btnRecebimentos}>
                    <Text style={styles.textoBotao}>Recebimentos pendentes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        marginTop: 30,
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
    botao:{
        width: '80%',
        height: 48,
        backgroundColor: '#F3ABC6',
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center',
        margin: 15,
    },
    textoBotao:{
        fontSize: 16,
        color: '#FFFFFF'
    }
});

export default Perfil;