import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Cliente} from '../classes/Cliente';
import {Usuario} from '../classes/Usuario';
import {Venda} from '../classes/Venda';

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const StoreData = async (value,value2) =>{
    await AsyncStorage.setItem('idUsuario', value);
    await AsyncStorage.setItem('Logado', value2);
  }
  const LoginBotao = async () =>{
    //const idUsuario = "Teste";
    //StoreData(idUsuario, true);
    //navigation.navigate('Home');
    let usuario = new Usuario(0, 'padrao', 'padrao', 'pradrao')
    let cliente = new Cliente(0, 'Jorge', usuario);
    let date = new Date();
    let venda = new Venda(0, cliente, usuario, 0, date, date);
    console.log(await venda.BuscarUnico(0));
  };
  return(
  <KeyboardAvoidingView style={styles.viewPrincipal}>
    <View style={styles.views}>
      <Image style={styles.logo} source={require('../img/logo.png')}/>
      <TextInput style={styles.entradas} placeholder='Login' onChangeText={(usuario) => setUsuario(usuario)}/>
      <TextInput style={styles.entradas} placeholder='Senha' secureTextEntry={true} onChangeText={(senha) => setSenha(senha)}/>
      <TouchableOpacity style={styles.botao} onPress={LoginBotao}>
        <Text style={{color: 'white'}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  viewPrincipal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  views:{
    alignItems: 'center',
  },
  logo:{
    width: 300,
    height: 300,
  },
  entradas:{
    borderWidth: 1,
    height: 40,
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  botao:{
    height: 40,
    width: '20%',
    alignSelf: 'flex-end',
    borderColor: 'black',
    backgroundColor: '#F3ABC6',
    margin: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  }
});

export default Login;