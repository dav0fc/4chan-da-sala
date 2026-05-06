import * as React from 'react';
import { useState } from 'react';
import '../../global.css';
import { TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { registerUser } from '../firebase/authService';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha tudo.');
      return;
    }

    try {
      await registerUser(email.trim(), senha);
      Alert.alert('Sucesso', 'Usuário criado.');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  }

  return (
    <View className="flex-1 justify-center px-6 bg-[#ffe]">
      <Text className="text-2xl mb-4 text-center">Cadastro</Text>

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={handleCadastro}>
        <View className="bg-red-800 p-3 rounded mt-2">
          <Text className="text-white text-center">Cadastrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}