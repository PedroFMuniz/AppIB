import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';

const Cliente = ({navigation}) =>{
    const getNome = () =>{
        const nome = "Alê";
        return(nome);
    }
    const getData = () =>{
        const data = [
            {
                id: '1',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '2',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '3',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '4',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '5',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            }
        ]
        return(data);
    }
    const getData2 = () =>{
        const data = [
            {
                id: '1',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '2',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '3',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '4',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            },
            {
                id: '5',
                valor: '500,00',
                cliente: '1',
                data: '24-03-2022',
                prazo: '30-03-2022',
                status: 'pendente'
            }
        ]
        return(data);
    }
    const RenderItem = ({data}) =>{
        return(
            <View style={styles.elementoLista}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>R$ {data.valor}</Text>
                <Text style={{fontSize:30}}>Prazo: {data.prazo.replace(/-/gi, '/')}</Text>
            </View>
        )
    }
    const Excluir = () =>{

    }
    const Editar = () =>{
        navigation.navigate('EditarCliente');
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32}}>Cliente</Text>
            </View>
            <View style={styles.containerCorpo}>
                <View style={styles.containerTexto}>
                    <Text style={{fontSize: 16, alignSelf:'flex-start', marginHorizontal: 15, marginTop: 15}}>Nome:</Text>
                    <View style={{flexDirection: 'row', width:'100%'}}>
                        <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>{getNome()}</Text>
                        <TouchableOpacity style={{width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent:'center', backgroundColor:'#F3ABC6', marginTop:5}} onPress={Editar}>
                            <Image style={{width: 20, height: 20}} source={require('../img/Lapis.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>Últimas compras:</Text>
                </View>
                <View style={styles.containerLista}>
                    <FlatList
                        data={getData()}
                        keyExtractor={item => String(item.id)}
                        renderItem={ ({ item }) => <RenderItem data={ item } />}
                    />
                </View>
                <View style={styles.containerTexto}>
                    <Text style={{fontSize: 32, alignSelf:'flex-start', marginHorizontal: 15}}>Pagamentos pendentes:</Text>
                </View>
                <View style={styles.containerLista}>
                    <FlatList
                        data={getData2()}
                        keyExtractor={item => String(item.id)}
                        renderItem={ ({ item }) => <RenderItem data={ item } />}
                    />
                </View>
                <View style={styles.containerTexto}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', alignSelf:'center'}} onPress={Excluir}>
                        <Text style={{fontSize: 32, color:'#FF0000'}}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        flex: 0.1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
    },
    containerCorpo:{
        flex: 0.9,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerTexto:{
        flex: 0.1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
    },
    containerLista:{
        flex: 0.35,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F4DBDE',
        borderBottomWidth: 3,
    },
    elementoLista:{
        width: '95%',
        padding: 10,
        borderColor: '#F3ABC6',
        borderWidth: 5,
        borderRadius: 15,
        margin: 10,
    }
})

export default Cliente;