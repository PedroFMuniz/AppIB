import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cliente from './src/screens/Cliente';
import Clientes from './src/screens/Clientes';
import NovaCliente from './src/screens/NovaCliente';
import EditarCliente from './src/screens/EditarCliente';
import Venda from './src/screens/Venda';
import Vendas from './src/screens/Vendas';
import NovaVenda from './src/screens/NovaVenda';
import EditarVenda from './src/screens/EditarVenda';
import Perfil from './src/screens/Perfil';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;