import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { ChevronLeft, Store, Clock, Printer, CreditCard, Shield, Smartphone } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConfiguracoesGerais = ({ navigation }: any) => {
  const sections = [
    {
      title: 'Loja',
      items: [
        { icon: <Store size={20} color="#4B5563" />, label: 'Status da Loja', value: 'Aberta', type: 'toggle' },
        { icon: <Clock size={20} color="#4B5563" />, label: 'Horário de Funcionamento', value: '18:00 - 23:30', type: 'link' },
      ]
    },
    {
      title: 'Integrações',
      items: [
        { icon: <Printer size={20} color="#4B5563" />, label: 'Impressoras', value: '2 ativas', type: 'link' },
        { icon: <CreditCard size={20} color="#4B5563" />, label: 'Meios de Pagamento', value: 'PIX, Cartão', type: 'link' },
        { icon: <Smartphone size={20} color="#4B5563" />, label: 'App do Entregador', value: 'Ativado', type: 'toggle' },
      ]
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ChevronLeft size={24} color="#181111" />
        </TouchableOpacity>
        <Text className="text-lg font-bold ml-2">Configurações</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {sections.map((section, idx) => (
          <View key={idx} className="mb-6">
            <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">{section.title}</Text>
            <View className="bg-gray-50 rounded-3xl overflow-hidden">
              {section.items.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  className={`flex-row items-center justify-between p-4 ${i < section.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <View className="flex-row items-center">
                    <View className="bg-white w-10 h-10 rounded-xl items-center justify-center shadow-sm">
                      {item.icon}
                    </View>
                    <View className="ml-4">
                      <Text className="text-sm font-bold text-gray-900">{item.label}</Text>
                      <Text className="text-xs text-gray-400">{item.value}</Text>
                    </View>
                  </View>
                  {item.type === 'toggle' ? <Switch value={true} trackColor={{ true: '#FF3838' }} /> : <ChevronLeft size={20} color="#D1D5DB" style={{ transform: [{ rotate: '180deg' }] }} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfiguracoesGerais;
