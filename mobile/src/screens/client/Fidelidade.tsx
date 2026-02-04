import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ChevronLeft, Bell, Star, Flame, Pizza, Gift, Utensils, History, User, BadgePercent } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Fidelidade (Mobile)
 * Implementada com React Native e NativeWind
 */
const Fidelidade = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Barra de Navegação Superior */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 items-center justify-center rounded-full bg-gray-50">
          <ChevronLeft size={24} color="#FF3838" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Minha Fidelidade</Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-gray-50 relative">
          <Bell size={24} color="#181111" />
          <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Card de Status */}
        <View className="p-4">
          <View className="bg-white rounded-3xl p-6 shadow-xl border border-primary/10">
            <View className="flex-row items-center mb-6">
              <View className="relative">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop' }}
                  className="w-20 h-20 rounded-full border-4 border-primary/20"
                />
                <View className="absolute -bottom-1 -right-1 bg-amber-400 p-1 rounded-full">
                  <Star size={12} color="black" fill="black" />
                </View>
              </View>
              <View className="ml-4">
                <Text className="text-2xl font-bold text-gray-900">Olá, João!</Text>
                <Text className="text-primary font-bold text-xs uppercase tracking-widest">Pizzaiolo Prateado</Text>
                <View className="flex-row items-center mt-1">
                  <Flame size={14} color="#9CA3AF" />
                  <Text className="text-gray-400 text-sm ml-1">700 pontos acumulados</Text>
                </View>
              </View>
            </View>

            <View className="gap-2">
              <View className="flex-row justify-between items-end">
                <Text className="text-sm font-semibold text-gray-400">Progresso do Prêmio</Text>
                <Text className="text-xl font-black text-primary">7/10</Text>
              </View>
              <View className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <View className="h-full bg-primary rounded-full" style={{ width: '70%' }} />
              </View>
              <Text className="text-center font-bold text-gray-900 mt-4">
                Faltam <Text className="text-primary text-2xl">3</Text> pizzas para sua Margherita grátis!
              </Text>
            </View>
          </View>
        </View>

        {/* Cartela de Selos */}
        <View className="px-4 mt-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-gray-900">Cartela de Selos</Text>
            <Text className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-400 uppercase tracking-widest">Cartão #04</Text>
          </View>
          <View className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-3xl p-5">
            <View className="flex-row flex-wrap gap-3 justify-center">
              {[...Array(7)].map((_, i) => (
                <View key={i} className="w-12 h-12 rounded-full bg-primary items-center justify-center shadow-lg border-2 border-white/20">
                  <Pizza size={20} color="white" />
                </View>
              ))}
              {[8, 9].map((n) => (
                <View key={n} className="w-12 h-12 rounded-full border-2 border-primary/20 bg-white/50 items-center justify-center">
                  <Text className="text-primary/20 font-bold">{n}</Text>
                </View>
              ))}
              <View className="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-400/10 items-center justify-center">
                <Gift size={20} color="#F59E0B" />
              </View>
            </View>
          </View>
        </View>

        {/* Prêmios */}
        <View className="px-4 mt-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Prêmios Disponíveis</Text>
          <TouchableOpacity activeOpacity={0.9} className="h-44 rounded-3xl overflow-hidden mb-4">
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=400&auto=format&fit=crop' }}
              className="w-full h-full justify-end p-5"
            >
              <View className="bg-black/40 absolute inset-0" />
              <View className="flex-row justify-between items-end">
                <View>
                  <Text className="text-white text-lg font-bold">Margherita Grátis</Text>
                  <Text className="text-white/70 text-sm">Faltam 300 pontos</Text>
                </View>
                <View className="bg-white/20 border border-white/30 px-4 py-2 rounded-xl">
                  <Text className="text-white font-bold text-sm">Resgatar</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navegação Inferior */}
      <View className="absolute bottom-10 left-4 right-4 h-16 bg-gray-900 rounded-full flex-row items-center justify-around px-4 shadow-2xl">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Utensils size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <BadgePercent size={28} color="#FF3838" />
          <View className="w-1 h-1 bg-primary rounded-full mt-1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MeusPedidos')}>
          <History size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <User size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Fidelidade;
