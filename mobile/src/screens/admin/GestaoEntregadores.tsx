import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ChevronLeft, Plus, Bike, MapPin, Phone } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const GestaoEntregadores = ({ navigation }: any) => {
  const entregadores = [
    { name: 'Ricardo Silva', status: 'Em Entrega', orders: 3, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' },
    { name: 'Marcos Oliveira', status: 'Disponível', orders: 0, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop' },
    { name: 'Felipe Santos', status: 'Offline', orders: 0, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
            <ChevronLeft size={24} color="#181111" />
          </TouchableOpacity>
          <Text className="text-lg font-bold ml-2">Entregadores</Text>
        </View>
        <TouchableOpacity className="bg-primary w-10 h-10 rounded-xl items-center justify-center">
          <Plus size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {entregadores.map((e, i) => (
          <Card key={i} className="mb-4 p-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image source={{ uri: e.avatar }} className="w-14 h-14 rounded-full" />
                <View className="ml-4">
                  <Text className="text-base font-bold text-gray-900">{e.name}</Text>
                  <View className="flex-row items-center mt-1">
                    <View className={`w-2 h-2 rounded-full ${e.status === 'Disponível' ? 'bg-green-500' : e.status === 'Em Entrega' ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    <Text className="text-xs text-gray-500 ml-2">{e.status}</Text>
                  </View>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-xl font-black text-gray-900">{e.orders}</Text>
                <Text className="text-[8px] font-bold text-gray-400 uppercase">Pedidos</Text>
              </View>
            </View>

            <View className="flex-row gap-2 mt-4">
              <TouchableOpacity className="flex-1 h-10 bg-gray-50 rounded-xl flex-row items-center justify-center">
                <Phone size={16} color="#4B5563" />
                <Text className="text-gray-600 font-bold text-xs ml-2">Ligar</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-10 bg-gray-50 rounded-xl flex-row items-center justify-center">
                <MapPin size={16} color="#4B5563" />
                <Text className="text-gray-600 font-bold text-xs ml-2">Rastrear</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GestaoEntregadores;
