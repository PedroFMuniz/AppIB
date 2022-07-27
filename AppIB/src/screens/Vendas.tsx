import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Vendas = ({navigation}) =>{
    const StoreData = async (value) =>{
        await AsyncStorage.setItem('idVenda', value);
    }
    const GetData = () =>{
        const data = [
            {
                id: '1',
                cliente: 'Alê',
                valor: '500,00',
                prazo: '22/03/2022'
            },
            {
                id: '2',
                cliente: 'Alê',
                valor: '500,00',
                prazo: '22/03/2022'
            },
            {
                id: '3',
                cliente: 'Alê',
                valor: '500,00',
                prazo: '22/03/2022'
            },
            {
                id: '4',
                cliente: 'Alê',
                valor: '500,00',
                prazo: '22/03/2022'
            },
            {
                id: '5',
                cliente: 'Alê',
                valor: '500,00',
                prazo: '22/03/2022'
            }
        ];
        return(data);
    }
    const BtnCliente = (id) =>{
        StoreData(id.id);
        navigation.navigate("Venda");
    }
    const BtnNovaVenda = () =>{
        navigation.navigate("NovaVenda");
    }
    const RenderItem = ({item}) =>{
        return(
            <TouchableOpacity style={styles.elementoLista} onPress={() => BtnCliente(item)}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>{item.cliente}</Text>
                <Text style={{fontSize:30}}>valor: R${item.valor}</Text>
                <Text style={{fontSize:30}}>prazo: R${item.prazo}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32, color: '#900351', fontWeight:'bold', marginBottom: 5}}>Minhas vendas</Text>
            </View>
            <View style={styles.containerLista}>
                <FlatList
                    data={GetData()}
                    keyExtractor={item => String(item.id)}
                    renderItem={RenderItem}
                />
            </View>
            <View>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', paddingTop:20}} onPress={() => BtnNovaVenda()}>
                    <Text>Nova Venda</Text>
                </TouchableOpacity>
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

export default Vendas;