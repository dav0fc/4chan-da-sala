import * as React from 'react';
import '../../global.css';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaHome() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-[#ffe]">
      <Text className="text-2xl mb-4">Bem-vindo!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
        <View className="bg-red-800 px-6 py-3 rounded">
          <Text className="text-white">Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}