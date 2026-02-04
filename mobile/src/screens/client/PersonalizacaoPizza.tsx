import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { ChevronLeft, Share2, Heart, Plus, Minus, Check } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Personalização de Pizza (Mobile)
 * Implementada com React Native e NativeWind
 */
const PersonalizacaoPizza = ({ navigation }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('gigante');
  const [extraBorder, setExtraBorder] = useState<string[]>([]);

  const toggleBorder = (border: string) => {
    if (extraBorder.includes(border)) {
      setExtraBorder(extraBorder.filter(b => b !== border));
    } else {
      setExtraBorder([...extraBorder, border]);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        {/* Imagem de Cabeçalho */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop' }}
          className="w-full h-80"
        >
          <SafeAreaView className="flex-row items-center justify-between px-4 pt-2">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 bg-white/90 rounded-full items-center justify-center"
            >
              <ChevronLeft size={24} color="#181111" />
            </TouchableOpacity>
            <View className="flex-row gap-2">
              <TouchableOpacity className="w-10 h-10 bg-white/90 rounded-full items-center justify-center">
                <Share2 size={20} color="#181111" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-white/90 rounded-full items-center justify-center">
                <Heart size={20} color="#FF3838" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>

        {/* Informações do Produto */}
        <View className="px-4 pt-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-900 text-3xl font-bold">Calabresa Especial</Text>
            <View className="bg-primary/10 px-2 py-1 rounded">
              <Text className="text-primary text-[10px] font-bold uppercase">Mais Vendida</Text>
            </View>
          </View>
          <Text className="text-gray-500 text-base mt-2 leading-6">
            Molho de tomate artesanal, muçarela, calabresa fatiada, cebola roxa, azeitonas pretas e orégano fresco. Massa de fermentação lenta.
          </Text>
        </View>

        <View className="h-2 bg-gray-50 my-6" />

        {/* Escolha do Tamanho */}
        <View className="px-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-gray-900 text-lg font-bold">Escolha o tamanho</Text>
            <View className="bg-gray-100 px-2 py-1 rounded">
              <Text className="text-gray-500 text-[10px] font-bold uppercase">Obrigatório</Text>
            </View>
          </View>

          <View className="gap-3">
            <TouchableOpacity
              onPress={() => setSelectedSize('gigante')}
              className={`flex-row items-center justify-between p-4 rounded-2xl border-2 ${selectedSize === 'gigante' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
            >
              <View className="flex-row items-center">
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${selectedSize === 'gigante' ? 'border-primary' : 'border-gray-300'}`}>
                  {selectedSize === 'gigante' && <View className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </View>
                <View className="ml-3">
                  <Text className="text-gray-900 font-bold">Gigante (40cm)</Text>
                  <Text className="text-gray-500 text-xs">12 fatias - Serve 4 pessoas</Text>
                </View>
              </View>
              <Text className="text-primary font-bold">R$ 84,90</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedSize('grande')}
              className={`flex-row items-center justify-between p-4 rounded-2xl border-2 ${selectedSize === 'grande' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
            >
              <View className="flex-row items-center">
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${selectedSize === 'grande' ? 'border-primary' : 'border-gray-300'}`}>
                  {selectedSize === 'grande' && <View className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </View>
                <View className="ml-3">
                  <Text className="text-gray-900 font-bold">Grande (35cm)</Text>
                  <Text className="text-gray-500 text-xs">8 fatias - Serve 3 pessoas</Text>
                </View>
              </View>
              <Text className={`font-bold ${selectedSize === 'grande' ? 'text-primary' : 'text-gray-900'}`}>R$ 72,90</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-2 bg-gray-50 my-6" />

        {/* Bordas Recheadas */}
        <View className="px-4">
          <Text className="text-gray-900 text-lg font-bold mb-4">Borda recheada</Text>
          <View className="gap-2">
            {['Catupiry Original', 'Cheddar Cremoso'].map((borda) => (
              <TouchableOpacity
                key={borda}
                onPress={() => toggleBorder(borda)}
                className="flex-row items-center justify-between p-4 rounded-xl border border-gray-100"
              >
                <Text className="text-gray-700 text-base">{borda}</Text>
                <View className="flex-row items-center">
                  <Text className="text-primary font-semibold mr-3">+ R$ 12,00</Text>
                  <View className={`w-6 h-6 rounded border items-center justify-center ${extraBorder.includes(borda) ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                    {extraBorder.includes(borda) && <Check size={16} color="white" />}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Observações */}
        <View className="px-4 mt-8">
          <Text className="text-gray-900 text-lg font-bold mb-3">Observações</Text>
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Ex: Tirar a cebola, bem passada, etc..."
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-base text-gray-900 min-h-[100px]"
            maxLength={140}
          />
          <Text className="text-right text-gray-400 text-xs mt-2">0 / 140</Text>
        </View>
      </ScrollView>

      {/* Footer Fixo */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-8 shadow-2xl">
        <View className="flex-row items-center gap-4">
          <View className="flex-row items-center bg-gray-100 rounded-2xl h-14 px-2">
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 items-center justify-center"
            >
              <Minus size={20} color="#FF3838" />
            </TouchableOpacity>
            <Text className="text-gray-900 font-bold text-lg w-8 text-center">{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              className="w-10 h-10 items-center justify-center"
            >
              <Plus size={20} color="#FF3838" />
            </TouchableOpacity>
          </View>

          <View className="flex-1">
            <Button
              title="Adicionar"
              onPress={() => navigation.navigate('Home')}
              className="h-14"
              icon={
                <View className="flex-row items-center">
                  <Text className="text-white/80 text-sm ml-auto pr-2">R$ {(84.90 * quantity).toFixed(2).replace('.', ',')}</Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalizacaoPizza;
