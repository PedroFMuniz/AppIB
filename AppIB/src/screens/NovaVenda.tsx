import React, { useState } from "react";
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput, { Masks } from 'react-native-mask-input';

const NovaVenda = ({navigation}) =>{
    const [open, setOpen] = useState(false);
    const [cliente, setCliente] = useState(null);
    const [valor, setValor] = useState('')
    const [data, setData] = useState('');
    const [show, setShow] = useState(false);
    const getItens = () =>{
        const data = [{label: 'Alê', value: '1'},{label: 'Maria', value: '2'}];
        return data;
    }
    const dataPicker = () =>{
        setShow(true)
    }
    const onChange = (dato) =>{
        var dataEscolhida = new Date(Date.now());
        if(dato.type == 'set'){
            dataEscolhida = new Date(dato.nativeEvent.timestamp)
        }
        setData(dataEscolhida.getDate() + '/' + (dataEscolhida.getMonth() + 1) + '/' + dataEscolhida.getFullYear());
        setShow(false);
    }
    const SaveVenda = () =>{
        navigation.navigate('Venda');
    }
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32}}>Nova Venda</Text>
            </View>
            <View style={styles.containerCorpo}>
                <Text>Cliente:</Text>
                <View style={styles.containerNome}>
                    <DropDownPicker style={{width: '85%', borderColor: '#F3ABC6', borderWidth: 3}} open={open} value={cliente} items={getItens()} setOpen={setOpen} setValue={setCliente}></DropDownPicker>
                    <TouchableOpacity style={styles.botaoNovo}>
                        <Text>{String(data)}</Text>
                    </TouchableOpacity>
                </View>
                <Text>Valor:</Text>
                <MaskInput
                value={valor}
                onChangeText={(masked, unmasked) => {
                  setValor(unmasked);
                }}
                mask={Masks.BRL_CURRENCY}
                style={styles.input}
                keyboardType={"numeric"}
                />
                <Text>Prazo de pagamento:</Text>
                <TouchableOpacity style={styles.input} onPress={dataPicker}>
                    <Text>{data}</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker value={new Date()} onChange={onChange}></DateTimePicker>
                )}
                <TouchableOpacity style={styles.botao} onPress={SaveVenda}>
                    <Text style={{color: '#FFFFFF'}}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    data:{
        borderWidth: 2,
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
        flex: 0.8,
        width: '100%',
        padding: 10
    },
    containerNome:{
        flexDirection: 'row',
        width: '100%',
    },
    botaoNovo:{
        flex: 0.2,
        width: 32,
        height: 32, 
        borderRadius: 16, 
        alignItems: 'center', 
        justifyContent:'center', 
        backgroundColor:'#F3ABC6',
    },input:{
        width: '95%',
        height: 50,
        margin: 0,
        borderColor: '#F3ABC6',
        borderRadius: 10,
        borderWidth: 3,
        padding: 10
    },
    botao:{
        width: '30%',
        margin: 10,
        backgroundColor: '#F3ABC6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: 10
    }
})

export default NovaVenda;