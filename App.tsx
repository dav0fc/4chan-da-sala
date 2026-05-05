import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navegador from 'components/Navegador';

export default function App() {
  return (
    <NavigationContainer>
      <Navegador />
    </NavigationContainer>
  );
}