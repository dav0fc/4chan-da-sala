import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from '../firebase/productService';
import '../../global.css';

export default function TelaHome() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  async function loadProducts() {
    try {
      const productList = await getProducts();
      setProducts(productList);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar os produtos.');
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function clearForm() {
    setName('');
    setPrice('');
    setEditingProductId(null);
  }

  async function handleSaveProduct() {
    if (!name.trim() || !price.trim()) {
      Alert.alert('Atenção', 'Preencha nome e preço do produto.');
      return;
    }

    try {
      if (editingProductId) {
        await updateProduct(editingProductId, {
          name: name.trim(),
          price: price.trim(),
        });
        Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      } else {
        await createProduct({
          name: name.trim(),
          price: price.trim(),
        });
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      }

      clearForm();
      loadProducts();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível salvar o produto.');
    }
  }

  function handleEditProduct(product: any) {
    setName(product.name);
    setPrice(product.price);
    setEditingProductId(product.id);
  }

  function handleCancelEdit() {
    clearForm();
  }

  function handleDeleteProduct(productId: string) {
    Alert.alert(
      'Excluir produto',
      'Tem certeza que deseja excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteProduct(productId);
              if (editingProductId === productId) {
                clearForm();
              }
              Alert.alert('Sucesso', 'Produto excluído com sucesso!');
              loadProducts();
            } catch (error) {
              console.error(error);
              Alert.alert('Erro', 'Não foi possível excluir o produto.');
            }
          },
        },
      ]
    );
  }

  return (
    <View className="flex-1 px-5 bg-[#ffe]">
      <Text className="text-2xl mt-10 mb-5">Bem-vindo!</Text>

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-3 bg-[#fafafa]"
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa]"
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSaveProduct}>
        <View className="bg-red-800 p-3 rounded mb-2">
          <Text className="text-white text-center">
            {editingProductId ? 'Atualizar produto' : 'Cadastrar produto'}
          </Text>
        </View>
      </TouchableOpacity>

      {editingProductId && (
        <TouchableOpacity onPress={handleCancelEdit}>
          <View className="bg-gray-500 p-3 rounded mb-4">
            <Text className="text-white text-center">Cancelar edição</Text>
          </View>
        </TouchableOpacity>
      )}

      <Text className="text-xl mt-4 mb-2">Produtos cadastrados</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
        renderItem={({ item }) => (
          <View className="border border-black rounded-lg p-3 mb-3 bg-[#fafafa]">
            <Text>Nome: {item.name}</Text>
            <Text>Preço: {item.price}</Text>

            <View className="mt-2">
              <TouchableOpacity onPress={() => handleEditProduct(item)}>
                <View className="bg-blue-700 p-2 rounded mb-1">
                  <Text className="text-white text-center">Editar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
                <View className="bg-red-600 p-2 rounded">
                  <Text className="text-white text-center">Excluir</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View className="mt-3 mb-5">
        <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
          <View className="bg-red-800 px-6 py-3 rounded">
            <Text className="text-white text-center">Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}