import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Clientes = () =>{
    const GetData = () =>{
        const data = [
            {
                id: '1',
                nome: 'Alê',
                compras: '500,00'
            },
            {
                id: '2',
                nome: 'Alê',
                compras: '500,00'
            },
            {
                id: '3',
                nome: 'Alê',
                compras: '500,00'
            },
            {
                id: '4',
                nome: 'Alê',
                compras: '500,00'
            },
            {
                id: '5',
                nome: 'Alê',
                compras: '500,00'
            }
        ];
        return(data);
    }
    const BtnCliente = () =>{

    }
    const RenderItem = ({data}) =>{
        return(
            <TouchableOpacity style={styles.elementoLista} onPress={BtnCliente}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>{data.nome}</Text>
                <Text style={{fontSize:30}}>Compras: R${data.compras}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32, color: '#900351', fontWeight:'bold', marginBottom: 5}}>Minhas clientes</Text>
            </View>
            <View style={styles.containerLista}>
                <FlatList
                    data={GetData()}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({ item }) => <RenderItem data={ item } />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTop:{
        flex: 0.1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
    },
    containerLista:{
        flex: 0.8,
        width: '100%',
        padding: 10
    },
    elementoLista:{
        width: '90%',
        padding: 10,
        borderColor: '#F3ABC6',
        borderWidth: 5,
        borderRadius: 15,
        margin: 10,
    }
})

export default Clientes;