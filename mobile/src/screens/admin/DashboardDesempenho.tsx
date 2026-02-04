import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TrendingUp, ShoppingBag, DollarSign, Users, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardDesempenho = () => {
  const stats = [
    { title: 'Vendas Hoje', value: 'R$ 4.250', icon: <DollarSign size={20} color="white" />, color: 'bg-green-500', trend: '+12%', isUp: true },
    { title: 'Pedidos', value: '84', icon: <ShoppingBag size={20} color="white" />, color: 'bg-blue-500', trend: '+5%', isUp: true },
    { title: 'Ticket Médio', value: 'R$ 50,60', icon: <TrendingUp size={20} color="white" />, color: 'bg-purple-500', trend: '-2%', isUp: false },
    { title: 'Novos Clientes', value: '12', icon: <Users size={20} color="white" />, color: 'bg-orange-500', trend: '+8%', isUp: true },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <Text className="text-xl font-black">Dashboard</Text>
        <TouchableOpacity className="flex-row items-center bg-gray-50 px-3 py-2 rounded-xl">
          <Calendar size={18} color="#4B5563" />
          <Text className="text-gray-600 font-bold text-xs ml-2">HOJE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        <View className="flex-row flex-wrap gap-4">
          {stats.map((item, index) => (
            <Card key={index} className="w-[47%] p-4">
              <View className={`w-10 h-10 ${item.color} rounded-xl items-center justify-center mb-3`}>
                {item.icon}
              </View>
              <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.title}</Text>
              <Text className="text-lg font-black text-gray-900 mt-1">{item.value}</Text>
              <View className="flex-row items-center mt-2">
                {item.isUp ? <ArrowUpRight size={14} color="#10B981" /> : <ArrowDownRight size={14} color="#EF4444" />}
                <Text className={`text-[10px] font-bold ml-1 ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>{item.trend} em relação a ontem</Text>
              </View>
            </Card>
          ))}
        </View>

        <View className="mt-8">
          <Text className="text-lg font-bold mb-4">Pedidos em Tempo Real</Text>
          <Card className="p-4 mb-3 border-l-4 border-l-orange-500">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-bold text-gray-900">Pedido #4095</Text>
                <Text className="text-xs text-gray-500 mt-1">1x Calabresa G, 1x Coca 2L</Text>
              </View>
              <View className="bg-orange-100 px-2 py-1 rounded">
                <Text className="text-orange-600 text-[10px] font-bold">PREPARANDO</Text>
              </View>
            </View>
          </Card>
          <Card className="p-4 border-l-4 border-l-blue-500">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-bold text-gray-900">Pedido #4094</Text>
                <Text className="text-xs text-gray-500 mt-1">2x Margherita G</Text>
              </View>
              <View className="bg-blue-100 px-2 py-1 rounded">
                <Text className="text-blue-600 text-[10px] font-bold">ENTREGA</Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardDesempenho;
