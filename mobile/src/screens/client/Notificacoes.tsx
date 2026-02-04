import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, Bell, Gift, Info, Pizza } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notificacoes = ({ navigation }: any) => {
  const notifications = [
    { icon: <Pizza size={20} color="white" />, color: 'bg-primary', title: 'Pizza saindo do forno!', msg: 'Seu pedido #4092 acaba de entrar em preparo.', time: '5 min atrás' },
    { icon: <Gift size={20} color="white" />, color: 'bg-amber-500', title: 'Você ganhou um cupom!', msg: 'Use o código PIZZA10 para 10% de desconto no próximo pedido.', time: '2 horas atrás' },
    { icon: <Bell size={20} color="white" />, color: 'bg-blue-500', title: 'Novidades no cardápio', msg: 'Confira as novas pizzas gourmet que acabaram de chegar.', time: 'Ontem' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ChevronLeft size={24} color="#181111" />
        </TouchableOpacity>
        <Text className="text-lg font-bold ml-2">Notificações</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {notifications.map((notif, index) => (
          <Card key={index} className="mb-3 p-4 flex-row items-start">
            <View className={`w-10 h-10 ${notif.color} rounded-full items-center justify-center shrink-0`}>
              {notif.icon}
            </View>
            <View className="ml-4 flex-1">
              <View className="flex-row justify-between items-start">
                <Text className="text-base font-bold text-gray-900 flex-1">{notif.title}</Text>
                <Text className="text-[10px] text-gray-400 ml-2">{notif.time}</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-1 leading-5">{notif.msg}</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notificacoes;
