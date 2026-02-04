import React from 'react';
import { View, Text, ScrollView, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Menu, ShoppingCart, Search, Plus, ShoppingBasket } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Home do Cardápio (Mobile)
 * Implementada com React Native e NativeWind
 */
const HomeCardapio = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Barra de Navegação Superior */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
        <TouchableOpacity className="p-2">
          <Menu size={28} color="#FF3838" />
        </TouchableOpacity>
        <Text className="text-gray-900 text-xl font-bold">Bella Pizza</Text>
        <TouchableOpacity
          className="p-2 relative"
          onPress={() => navigation.navigate('FinalizacaoPedido')}
        >
          <ShoppingCart size={28} color="#1F2937" />
          <View className="absolute top-0 right-0 bg-primary rounded-full px-1.5 py-0.5 border-2 border-white">
            <Text className="text-white text-[10px] font-bold">2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Barra de Pesquisa */}
        <View className="px-4 py-3">
          <View className="flex-row items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 h-14">
            <Search size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Qual pizza você deseja hoje?"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-3 text-base text-gray-900"
            />
          </View>
        </View>

        {/* Carrossel de Promoções */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
          <TouchableOpacity
            activeOpacity={0.9}
            className="mr-4 w-80 h-44 rounded-3xl overflow-hidden shadow-sm"
          >
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop' }}
              className="w-full h-full justify-end p-4"
            >
              <View className="bg-black/20 absolute inset-0" />
              <Text className="text-white text-lg font-bold">Promoção Terça em Dobro</Text>
              <Text className="text-white/80 text-sm">Compre 1 e leve a segunda grátis</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            className="mr-4 w-80 h-44 rounded-3xl overflow-hidden shadow-sm"
          >
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=800&auto=format&fit=crop' }}
              className="w-full h-full justify-end p-4"
            >
              <View className="bg-black/20 absolute inset-0" />
              <Text className="text-white text-lg font-bold">Novidade: Calabresa Gourmet</Text>
              <Text className="text-white/80 text-sm">Ingredientes selecionados</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>

        {/* Tabs de Categorias */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6 border-b border-gray-100 pb-3">
          <View className="flex-row px-4 gap-6">
            <TouchableOpacity className="items-center border-b-2 border-primary pb-2">
              <View className="w-14 h-14 rounded-full border-2 border-primary p-0.5 mb-1">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=100&auto=format&fit=crop' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text className="text-primary font-bold text-xs">Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center pb-2">
              <View className="w-14 h-14 rounded-full bg-gray-100 p-0.5 mb-1">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=100&auto=format&fit=crop' }}
                  className="w-full h-full rounded-full opacity-50"
                />
              </View>
              <Text className="text-gray-500 font-bold text-xs">Bebidas</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center pb-2">
              <View className="w-14 h-14 rounded-full bg-gray-100 p-0.5 mb-1">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=100&auto=format&fit=crop' }}
                  className="w-full h-full rounded-full opacity-50"
                />
              </View>
              <Text className="text-gray-500 font-bold text-xs">Sobremesas</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Cabeçalho da Seção */}
        <View className="flex-row items-center justify-between px-4 pt-6 pb-2">
          <Text className="text-gray-900 text-xl font-bold">Pizzas Populares</Text>
          <TouchableOpacity>
            <Text className="text-primary font-semibold text-sm">Ver todas</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Produtos Vertical */}
        <View className="px-4 gap-4">
          <Card
            className="flex-row items-center p-3"
            onPress={() => navigation.navigate('PersonalizacaoPizza')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=200&auto=format&fit=crop' }}
              className="w-24 h-24 rounded-2xl"
            />
            <View className="flex-1 ml-4 justify-between h-24 py-1">
              <View>
                <Text className="text-gray-900 font-bold text-base">Margherita Clássica</Text>
                <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
                  Molho de tomate pelati, mozzarella de búfala, manjericão fresco e azeite.
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-primary font-bold text-lg">R$ 45,90</Text>
                <TouchableOpacity className="bg-primary w-8 h-8 rounded-full items-center justify-center">
                  <Plus size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card className="flex-row items-center p-3">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=200&auto=format&fit=crop' }}
              className="w-24 h-24 rounded-2xl"
            />
            <View className="flex-1 ml-4 justify-between h-24 py-1">
              <View>
                <Text className="text-gray-900 font-bold text-base">Pepperoni Especial</Text>
                <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
                  Mozzarella, pepperoni artesanal crocante e orégano chileno.
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-primary font-bold text-lg">R$ 52,90</Text>
                <TouchableOpacity className="bg-primary w-8 h-8 rounded-full items-center justify-center">
                  <Plus size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>

      {/* Barra de Carrinho Flutuante */}
      <View className="absolute bottom-10 left-4 right-4 shadow-2xl">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('FinalizacaoPedido')}
          className="bg-primary h-16 rounded-2xl flex-row items-center justify-between px-6"
        >
          <View className="flex-row items-center">
            <ShoppingBasket size={24} color="white" />
            <Text className="text-white font-bold ml-3 text-base">Ver Carrinho</Text>
          </View>
          <View className="items-end">
            <Text className="text-white/80 text-[10px]">2 itens</Text>
            <Text className="text-white font-bold text-lg">R$ 98,80</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeCardapio;
