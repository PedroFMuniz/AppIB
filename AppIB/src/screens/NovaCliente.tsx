import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const NovaCliente = ({navigation}) =>{
    const [nome, setNome] = useState('');
    const SaveNome = () =>{
        navigation.navigate('Cliente');
    }
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize: 32, color: '#900351', fontWeight:'bold', marginBottom: 5}}>Nova cliente</Text>
            </View>
            <View style={styles.containerCorpo}>
                <TextInput style={styles.input} onChangeText={setNome} placeholder={'Nome'}></TextInput>
                <TouchableOpacity style={styles.botao} onPress={SaveNome}>
                    <Text style={{color: '#FFFFFF'}}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
    containerCorpo:{
        flex: 0.8,
        width: '100%',
        padding: 10
    },
    input:{
        width: '95%',
        margin: 10,
        borderColor: '#F3ABC6',
        borderRadius: 20,
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

export default NovaCliente;