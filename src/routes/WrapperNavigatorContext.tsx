import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Perfil from '../components/Screen/Perfil';
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cantina/ListarCardapio';
import Pedidos from '../components/Screen/Pedidos';
import ItemDetalhado from '../components/Screen/Cantina/ItemDetalhado';
import CantinaScreen from '../components/Screen/Cantina';
import CadastroScreen from '../components/Screen/Cadastro';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeTabsNavigator from './navigation/HomeTabsNavigator';
import SacolaScreen from '../components/Screen/Sacola';

const Stack = createStackNavigator();

/*===================================================================================================*/
/* Pilha de rotas da aplicação (Wrapper)
/*===================================================================================================*/
export const WrapperNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Sacola'>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetalhado" component={ItemDetalhado} options={{ headerShown: false }} />
      <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="CantinaScreen" component={CantinaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sacola" component={SacolaScreen} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  )
}