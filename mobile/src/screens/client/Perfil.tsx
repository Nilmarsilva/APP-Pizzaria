import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ChevronRight, User, MapPin, CreditCard, Bell, Shield, LogOut } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Perfil = ({ navigation }: any) => {
  const menuItems = [
    { icon: <User size={22} color="#4B5563" />, title: 'Meus Dados', subtitle: 'Nome, CPF, E-mail' },
    { icon: <MapPin size={22} color="#4B5563" />, title: 'Endereços', subtitle: '2 endereços cadastrados' },
    { icon: <CreditCard size={22} color="#4B5563" />, title: 'Pagamentos', subtitle: 'Cartões salvos' },
    { icon: <Bell size={22} color="#4B5563" />, title: 'Notificações', subtitle: 'Configurações de alerta' },
    { icon: <Shield size={22} color="#4B5563" />, title: 'Segurança', subtitle: 'Senha e Biometria' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center py-8 px-4">
          <View className="relative">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop' }}
              className="w-28 h-28 rounded-full border-4 border-gray-50"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full border-4 border-white">
              <User size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-bold mt-4 text-gray-900">João Silva</Text>
          <Text className="text-gray-500 text-sm">joao.silva@email.com</Text>
        </View>

        <View className="px-4 mt-4">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between p-4 bg-gray-50 rounded-2xl mb-3"
            >
              <View className="flex-row items-center">
                <View className="bg-white w-10 h-10 rounded-xl items-center justify-center shadow-sm">
                  {item.icon}
                </View>
                <View className="ml-4">
                  <Text className="text-base font-bold text-gray-900">{item.title}</Text>
                  <Text className="text-xs text-gray-400">{item.subtitle}</Text>
                </View>
              </View>
              <ChevronRight size={20} color="#D1D5DB" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            className="flex-row items-center justify-center p-4 mt-4 mb-10"
            onPress={() => navigation.navigate('Home')}
          >
            <LogOut size={20} color="#EF4444" />
            <Text className="text-red-500 font-bold ml-2">Sair da Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfil;
