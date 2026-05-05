import * as React from 'react';
import Logo from 'components/Logo';
import '../global.css';
import { Text, View } from 'react-native';

export default function TelaDescorbrirSenha() {
  return (
    <View className="flex-1 items-center justify-center bg-[#ffe] px-4">
      <Logo className="" />
      <Text className="text-xl text-black mt-4">
        Sua senha é: 123456
      </Text>
    </View>
  );
}