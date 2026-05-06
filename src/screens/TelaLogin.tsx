import * as React from 'react';
import { useState } from 'react';
import Logo from '../components/Logo';
import '../../global.css';
import { TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../firebase/authService';

export default function TelaLogin() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha email e senha.');
      return;
    }

    try {
      await loginUser(email.trim(), senha);
      navigation.navigate('Home' as never);
    } catch (error: any) {
      Alert.alert('Erro ao entrar', error.message);
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#ffe] px-4">
      <Logo className="" />

      <TextInput
        className="w-80 border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-80 border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={handleLogin}>
        <View className="bg-red-800 rounded-lg px-6 py-3 m-2">
          <Text className="text-white text-xl text-center">ENTRAR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro' as never)}>
        <Text className="text-red-800 underline mt-2">Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha' as never)}>
        <Text className="text-red-800 underline mt-2">Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}