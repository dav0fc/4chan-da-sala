import * as React from 'react';
import Logo from 'components/Logo';
import '../global.css';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaLogin() {
  const navigation = useNavigation();
  return (
    <>      
    <View className="flex-1 items-center justify-center bg-[#ffe] bg-[url('./assets/fade.png')] bg-top bg-repeat-x px-4">
      <Logo className=''/>
      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-5 mb-4 bg-[#fafafa] text-black"
        placeholder="Seu RM" 
      />  

      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa] text-black"
        placeholder="Sua Senha"
        secureTextEntry 
      />
        
      <TouchableOpacity className="" onPress={() => navigation.navigate('DescobrirSenha')}>
        <Text
        className="text-red-800 font-normal underline m-1 text-center">Descobrir minha senha
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity className=" bg-red-800 rounded-lg px-6 py-3 m-4">
        <Text 
        className="text-[#fafafa] text-2xl font-semibold m-1 text-center">SING UP
        </Text>
      </TouchableOpacity>
    </View>
    </>
  );
}