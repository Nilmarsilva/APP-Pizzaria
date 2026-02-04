import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, DollarSign, ArrowDown, ArrowUp, Calendar, Filter } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const AcertoFinanceiro = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
            <ChevronLeft size={24} color="#181111" />
          </TouchableOpacity>
          <Text className="text-lg font-bold ml-2">Financeiro</Text>
        </View>
        <TouchableOpacity className="p-2 bg-gray-50 rounded-xl">
          <Filter size={20} color="#181111" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {/* Card de Saldo */}
        <View className="bg-gray-900 rounded-[32px] p-8 mb-6 shadow-2xl">
          <Text className="text-gray-400 text-xs font-bold uppercase tracking-widest">Saldo Disponível</Text>
          <Text className="text-4xl font-black text-white mt-2">R$ 12.450,80</Text>
          <View className="flex-row gap-4 mt-8">
            <View className="flex-1">
              <Text className="text-gray-400 text-[10px] font-bold uppercase">Entradas</Text>
              <View className="flex-row items-center mt-1">
                <ArrowDown size={14} color="#10B981" />
                <Text className="text-green-500 font-bold ml-1">R$ 15.200</Text>
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 text-[10px] font-bold uppercase">Saídas</Text>
              <View className="flex-row items-center mt-1">
                <ArrowUp size={14} color="#EF4444" />
                <Text className="text-red-500 font-bold ml-1">R$ 2.750</Text>
              </View>
            </View>
          </View>
        </View>

        <Text className="text-lg font-bold mb-4">Lançamentos Recentes</Text>
        {[
          { title: 'Venda Cartão #4092', value: '+ R$ 61,90', color: 'text-green-500', icon: <DollarSign size={18} color="#10B981" /> },
          { title: 'Pagamento Motoboy #4090', value: '- R$ 12,00', color: 'text-red-500', icon: <DollarSign size={18} color="#EF4444" /> },
          { title: 'Venda PIX #4089', value: '+ R$ 45,90', color: 'text-green-500', icon: <DollarSign size={18} color="#10B981" /> },
          { title: 'Compra Insumos (Atacadão)', value: '- R$ 850,00', color: 'text-red-500', icon: <DollarSign size={18} color="#EF4444" /> },
        ].map((item, i) => (
          <View key={i} className="flex-row items-center justify-between p-4 bg-gray-50 rounded-2xl mb-3">
            <View className="flex-row items-center">
              <View className="bg-white w-10 h-10 rounded-xl items-center justify-center shadow-sm">
                {item.icon}
              </View>
              <View className="ml-4">
                <Text className="text-sm font-bold text-gray-900">{item.title}</Text>
                <Text className="text-[10px] text-gray-400">Hoje, 14:30</Text>
              </View>
            </View>
            <Text className={`font-bold ${item.color}`}>{item.value}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcertoFinanceiro;
