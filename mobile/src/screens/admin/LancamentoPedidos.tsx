import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ChevronLeft, UserPlus, MoreVertical, Search, Star, ShoppingBasket, Trash2, CheckCircle, List, Clock, Users, Settings } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Lançamento de Pedidos (Mobile Admin)
 * Implementada com React Native e NativeWind
 */
const LancamentoPedidos = ({ navigation }: any) => {
  const [serviceType, setServiceType] = useState('local');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Barra de Navegação Superior */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
            <ChevronLeft size={24} color="#181111" />
          </TouchableOpacity>
          <Text className="text-lg font-bold ml-2">Novo Pedido</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2 bg-gray-50 rounded-xl">
            <UserPlus size={20} color="#FF3838" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-50 rounded-xl">
            <MoreVertical size={20} color="#181111" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Busca de Cliente */}
        <View className="px-4 py-4">
          <View className="flex-row items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 h-14">
            <Search size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Buscar cliente por telefone ou nome"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-3 text-base text-gray-900"
            />
          </View>
        </View>

        {/* Tipo de Serviço */}
        <View className="px-4">
          <View className="flex-row bg-gray-100 rounded-2xl p-1 h-12">
            {['local', 'retirada', 'entrega'].map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setServiceType(type)}
                className={`flex-1 items-center justify-center rounded-xl ${serviceType === type ? 'bg-primary shadow-sm' : ''}`}
              >
                <Text className={`text-xs font-bold capitalize ${serviceType === type ? 'text-white' : 'text-gray-500'}`}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categorias */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between px-4 mb-4">
            <Text className="text-lg font-bold">Categorias</Text>
            <TouchableOpacity>
              <Text className="text-primary font-semibold text-xs">Ver todas</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
            <TouchableOpacity className="bg-primary h-10 px-5 rounded-full flex-row items-center mr-3 shadow-sm shadow-primary/30">
              <Star size={16} color="white" fill="white" />
              <Text className="text-white font-bold ml-2 text-sm">Mais Vendidas</Text>
            </TouchableOpacity>
            {['Salgadas', 'Doces', 'Bebidas'].map((cat) => (
              <TouchableOpacity key={cat} className="bg-white border border-gray-100 h-10 px-5 rounded-full flex-row items-center mr-3">
                <Text className="text-gray-600 font-medium text-sm">{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Grade de Produtos */}
        <View className="flex-row flex-wrap px-4 mt-6 gap-3">
          <Card className="w-[31%] p-3 border-transparent">
            <Text className="text-primary text-[8px] font-extrabold uppercase bg-primary/10 self-start px-1 rounded mb-1">Popular</Text>
            <Text className="text-xs font-bold" numberOfLines={1}>Calabresa G</Text>
            <Text className="text-primary font-bold text-xs">R$ 45,90</Text>
          </Card>
          <Card className="w-[31%] p-3 border-transparent">
            <Text className="text-primary text-[8px] font-extrabold uppercase bg-primary/10 self-start px-1 rounded mb-1">Top 1</Text>
            <Text className="text-xs font-bold" numberOfLines={1}>Frango Cat.</Text>
            <Text className="text-primary font-bold text-xs">R$ 48,90</Text>
          </Card>
          <Card className="w-[31%] p-3 border-transparent">
            <View className="h-4" />
            <Text className="text-xs font-bold" numberOfLines={1}>Margherita G</Text>
            <Text className="text-primary font-bold text-xs">R$ 42,90</Text>
          </Card>
        </View>

        {/* Carrinho Resumo */}
        <View className="px-4 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <ShoppingBasket size={20} color="#FF3838" />
              <Text className="text-lg font-bold ml-2">Carrinho</Text>
            </View>
            <View className="bg-primary/10 px-2 py-0.5 rounded-full">
              <Text className="text-primary text-[10px] font-bold">2 ITENS</Text>
            </View>
          </View>

          <View className="gap-4">
            <View className="flex-row justify-between items-start border-b border-gray-50 pb-4">
              <View className="flex-row flex-1">
                <View className="bg-gray-100 w-8 h-8 rounded-lg items-center justify-center">
                  <Text className="text-xs font-bold">1x</Text>
                </View>
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-bold">Calabresa Grande</Text>
                  <Text className="text-[10px] text-gray-400">Sem cebola, borda recheada</Text>
                  <Text className="text-primary font-bold text-sm mt-1">R$ 45,90</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Trash2 size={18} color="#D1D5DB" />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-start">
              <View className="flex-row flex-1">
                <View className="bg-gray-100 w-8 h-8 rounded-lg items-center justify-center">
                  <Text className="text-xs font-bold">1x</Text>
                </View>
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-bold">Coca-Cola 2L</Text>
                  <Text className="text-[10px] text-gray-400">Gelada</Text>
                  <Text className="text-primary font-bold text-sm mt-1">R$ 14,00</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Trash2 size={18} color="#D1D5DB" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Observações Cozinha */}
        <View className="px-4 mt-8">
          <Text className="text-sm font-bold mb-2">Observações da Cozinha</Text>
          <TextInput
            multiline
            placeholder="Ex: Pizza de Calabresa sem cebola..."
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm min-h-[100px]"
          />
        </View>
      </ScrollView>

      {/* Footer Finalização */}
      <View className="absolute bottom-16 left-0 right-0 p-4 bg-white border-t border-gray-50">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-500 font-medium">Total do Pedido</Text>
          <Text className="text-2xl font-black text-primary">R$ 59,90</Text>
        </View>
        <Button
          title="Finalizar Pedido"
          onPress={() => {}}
          className="h-16"
          icon={<CheckCircle size={24} color="white" />}
        />
      </View>

      {/* Nav Administrativa */}
      <View className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex-row items-center justify-around px-4">
        <TouchableOpacity className="items-center">
          <List size={24} color="#FF3838" />
          <Text className="text-[8px] font-bold text-primary mt-1">CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Clock size={24} color="#D1D5DB" />
          <Text className="text-[8px] font-bold text-gray-400 mt-1">PEDIDOS</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Users size={24} color="#D1D5DB" />
          <Text className="text-[8px] font-bold text-gray-400 mt-1">CLIENTES</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Settings size={24} color="#D1D5DB" />
          <Text className="text-[8px] font-bold text-gray-400 mt-1">AJUSTES</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LancamentoPedidos;
