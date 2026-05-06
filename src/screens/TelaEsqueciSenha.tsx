import * as React from 'react';
import { useState } from 'react';
import '../../global.css';
import { TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { resetUserPassword } from '../firebase/authService';

export default function TelaEsqueciSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  async function handleReset() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Informe o email.');
      return;
    }

    try {
      await resetUserPassword(email.trim());
      Alert.alert('Sucesso', 'Email enviado.');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  }

  return (
    <View className="flex-1 justify-center px-6 bg-[#ffe]">
      <Text className="text-2xl mb-4 text-center">Recuperar Senha</Text>

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity onPress={handleReset}>
        <View className="bg-red-800 p-3 rounded mt-2">
          <Text className="text-white text-center">Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}