import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from 'screens/TelaLogin';
import TelaDescorbrirSenha from 'screens/TelaDescorbrirSenha';

export type RootStackParamList = {
  Login: undefined;
  DescobrirSenha: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navegador() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#7f1d1d' }, // red-800
        headerTintColor: '#fafafa',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Login"
        component={TelaLogin}
        options={{ title: 'Login' }}
      />

      <Stack.Screen
        name="DescobrirSenha"
        component={TelaDescorbrirSenha}
        options={{ title: 'Recuperar Senha' }}
      />
    </Stack.Navigator>
  );
}