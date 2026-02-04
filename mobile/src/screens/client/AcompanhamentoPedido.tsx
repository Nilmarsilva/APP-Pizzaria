import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ChevronLeft, HelpCircle, MessageCircle, Star, Check, Bike } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Acompanhamento de Pedido (Mobile)
 * Implementada com React Native e NativeWind
 */
const AcompanhamentoPedido = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Barra de Navegação Superior */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="p-1">
          <ChevronLeft size={24} color="#181111" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Pedido #4092</Text>
        <TouchableOpacity className="p-1">
          <HelpCircle size={24} color="#FF3838" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Mensagem de Status */}
        <View className="p-6">
          <Text className="text-gray-900 text-3xl font-bold">A caminho!</Text>
          <Text className="text-gray-500 text-base mt-1">O Ricardo está trazendo sua pizza quentinha.</Text>
        </View>

        {/* Mapa Simulado */}
        <View className="px-4 py-2">
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop' }}
            className="w-full aspect-[16/10] rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <View className="flex-1 items-center justify-center">
              <View className="relative">
                <View className="absolute w-12 h-12 bg-primary/20 rounded-full scale-150" />
                <View className="bg-primary p-3 rounded-full shadow-lg border-2 border-white">
                  <Bike size={20} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Perfil do Entregador */}
        <View className="px-4 py-4">
          <View className="flex-row items-center p-4 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' }}
              className="w-16 h-16 rounded-full border-2 border-primary/20"
            />
            <View className="ml-4 flex-1">
              <Text className="text-gray-900 text-lg font-bold">Ricardo Silva</Text>
              <View className="flex-row items-center mt-1">
                <Star size={14} color="#FACC15" fill="#FACC15" />
                <Text className="text-gray-500 text-sm ml-1">4.9 • Entregador parceiro</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-green-500 w-12 h-12 rounded-full items-center justify-center shadow-lg">
              <MessageCircle size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Timeline do Pedido */}
        <View className="px-6 py-4">
          <Text className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Etapas do Pedido</Text>

          <View className="flex-row gap-4">
            <View className="items-center">
              <View className="bg-primary w-8 h-8 rounded-full items-center justify-center">
                <Check size={18} color="white" />
              </View>
              <View className="w-0.5 h-12 bg-primary" />

              <View className="bg-primary w-8 h-8 rounded-full items-center justify-center">
                <Check size={18} color="white" />
              </View>
              <View className="w-0.5 h-12 bg-primary" />

              <View className="border-2 border-primary w-8 h-8 rounded-full items-center justify-center">
                <Bike size={18} color="#FF3838" />
              </View>
            </View>

            <View>
              <View className="h-20">
                <Text className="text-gray-900 text-base font-bold">Pedido Recebido</Text>
                <Text className="text-gray-500 text-sm">Confirmado às 19:00</Text>
              </View>

              <View className="h-20">
                <Text className="text-gray-900 text-base font-bold">Em Preparo</Text>
                <Text className="text-gray-500 text-sm">Iniciado às 19:15</Text>
              </View>

              <View>
                <Text className="text-primary text-base font-bold">Saiu para Entrega</Text>
                <Text className="text-gray-500 text-sm font-medium">Previsão: 10-15 min</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Cupom Fiscal */}
        <View className="px-4 mt-6">
          <View className="p-5 bg-gray-50 border border-gray-100 rounded-2xl">
            <Text className="text-gray-900 text-base font-bold">Cupom Fiscal</Text>
            <Text className="text-gray-500 text-sm mt-1 mb-4">Sua nota fiscal já está disponível para visualização.</Text>
            <Button
              title="Ver Cupom"
              onPress={() => {}}
              className="h-10 py-0"
              variant="outline"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcompanhamentoPedido;
