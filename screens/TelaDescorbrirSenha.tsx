import * as React from 'react';
import Logo from 'components/Logo';
import '../global.css';
import { TextInput, TouchableOpacity, Image, Text, View } from 'react-native';

export default function TelaDescorbrirSenha() {
  return (
    <>
        <View className="flex-1 items-center justify-center bg-[#ffe] bg-[url('./assets/fade.png')] bg-top bg-repeat-x px-4">
            <Logo className=''/>
            <TextInput>Sua senha é: 123456</TextInput>
        </View>
    </>
  );
}