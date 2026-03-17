import * as React from 'react';
import TelaDescorbrirSenha from 'screens/TelaDescorbrirSenha';
import TelaLogin from 'screens/TelaLogin';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Seila" component={TelaLogin} />
        <Stack.Screen name="DescobrirSenha" component={TelaDescorbrirSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}