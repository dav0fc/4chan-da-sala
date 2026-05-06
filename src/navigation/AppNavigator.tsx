import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from '../screens/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro';
import TelaEsqueciSenha from '../screens/TelaEsqueciSenha';
import TelaHome from '../screens/TelaHome';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  EsqueciSenha: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#7f1d1d' },
          headerTintColor: '#fafafa',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Login" component={TelaLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="EsqueciSenha" component={TelaEsqueciSenha} options={{ title: 'Recuperar Senha' }} />
        <Stack.Screen name="Home" component={TelaHome} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}