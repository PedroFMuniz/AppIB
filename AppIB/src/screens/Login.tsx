import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const LoginBotao = () =>{
    navigation.navigate('Home')
  };
  return(
  <KeyboardAvoidingView style={styles.viewPrincipal}>
    <View style={styles.views}>
      <Image style={styles.logo} source={require('./src/img/logo.png')}/>
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