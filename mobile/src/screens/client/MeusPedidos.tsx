import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, Package, ChevronRight, Clock } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const MeusPedidos = ({ navigation }: any) => {
  const pedidos = [
    { id: '4092', data: 'Hoje, 19:00', status: 'A caminho', valor: 'R$ 61,90', itens: '1x Pizza Calabresa, 1x Coca-Cola', active: true },
    { id: '3985', data: '12 de Out, 21:30', status: 'Entregue', valor: 'R$ 84,50', itens: '1x Pizza Margherita, 1x Pizza Doce', active: false },
    { id: '3812', data: '05 de Out, 20:15', status: 'Entregue', valor: 'R$ 45,90', itens: '1x Pizza Pepperoni', active: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ChevronLeft size={24} color="#181111" />
        </TouchableOpacity>
        <Text className="text-lg font-bold ml-2">Meus Pedidos</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {pedidos.map((pedido) => (
          <Card
            key={pedido.id}
            className={`mb-4 p-4 ${pedido.active ? 'border-primary bg-primary/5' : ''}`}
            onPress={() => pedido.active && navigation.navigate('AcompanhamentoPedido')}
          >
            <View className="flex-row justify-between items-start mb-3">
              <View className="flex-row items-center">
                <View className={`w-10 h-10 rounded-xl items-center justify-center ${pedido.active ? 'bg-primary' : 'bg-gray-100'}`}>
                  <Package size={20} color={pedido.active ? 'white' : '#9CA3AF'} />
                </View>
                <View className="ml-3">
                  <Text className="text-base font-bold text-gray-900">Pedido #{pedido.id}</Text>
                  <Text className="text-xs text-gray-500">{pedido.data}</Text>
                </View>
              </View>
              <View className={`px-2 py-1 rounded-full ${pedido.active ? 'bg-primary' : 'bg-gray-100'}`}>
                <Text className={`text-[10px] font-bold uppercase ${pedido.active ? 'text-white' : 'text-gray-500'}`}>
                  {pedido.status}
                </Text>
              </View>
            </View>

            <Text className="text-gray-600 text-sm mb-3" numberOfLines={1}>{pedido.itens}</Text>

            <View className="flex-row justify-between items-center pt-3 border-t border-gray-100">
              <Text className="text-lg font-bold text-gray-900">{pedido.valor}</Text>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-primary font-bold text-xs mr-1">
                  {pedido.active ? 'Ver Detalhes' : 'Pedir Novamente'}
                </Text>
                <ChevronRight size={16} color="#FF3838" />
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeusPedidos;
