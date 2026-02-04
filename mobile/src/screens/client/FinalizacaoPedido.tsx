import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ChevronLeft, X, MapPin, QrCode, CreditCard, CheckCircle2, ChevronRight } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Finalização de Pedido (Mobile)
 * Implementada com React Native e NativeWind
 */
const FinalizacaoPedido = ({ navigation }: any) => {
  const [deliveryType, setDeliveryType] = useState('entrega');
  const [paymentMethod, setPaymentMethod] = useState('pix');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Barra de Navegação Superior */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ChevronLeft size={24} color="#181111" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Finalização</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="p-1">
          <X size={24} color="#181111" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Seletor Entrega/Retirada */}
        <View className="px-4 py-4">
          <View className="flex-row bg-gray-100 rounded-2xl p-1 h-14">
            <TouchableOpacity
              onPress={() => setDeliveryType('entrega')}
              className={`flex-1 flex-row items-center justify-center rounded-xl ${deliveryType === 'entrega' ? 'bg-white shadow-sm' : ''}`}
            >
              <Text className={`font-bold ${deliveryType === 'entrega' ? 'text-gray-900' : 'text-gray-500'}`}>Entrega</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDeliveryType('retirada')}
              className={`flex-1 flex-row items-center justify-center rounded-xl ${deliveryType === 'retirada' ? 'bg-white shadow-sm' : ''}`}
            >
              <Text className={`font-bold ${deliveryType === 'retirada' ? 'text-gray-900' : 'text-gray-500'}`}>Retirada</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Endereço */}
        <View className="px-4">
          <Text className="text-lg font-bold mb-3">Endereço de Entrega</Text>
          <Card className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center flex-1">
              <View className="bg-primary/10 w-12 h-12 rounded-2xl items-center justify-center">
                <MapPin size={24} color="#FF3838" />
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-base font-bold text-gray-900" numberOfLines={1}>Rua das Pizzas, 123</Text>
                <Text className="text-sm text-gray-500" numberOfLines={1}>Apt 402 - Bairro Centro</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-xl ml-2">
              <Text className="text-sm font-bold text-gray-900">Editar</Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/* Resumo do Pedido */}
        <View className="px-4 mt-8">
          <Text className="text-lg font-bold mb-3">Resumo do Pedido</Text>
          <View className="border border-gray-100 rounded-2xl overflow-hidden">
            <View className="flex-row items-center p-4 border-b border-gray-50">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=100&auto=format&fit=crop' }}
                className="w-14 h-14 rounded-xl border border-gray-100"
              />
              <View className="ml-4 flex-1">
                <View className="flex-row justify-between">
                  <Text className="text-base font-bold text-gray-900">1x Pizza Calabresa</Text>
                  <Text className="font-bold text-gray-900">R$ 54,90</Text>
                </View>
                <Text className="text-xs text-gray-500 mt-1">Massa Fina, Borda Recheada</Text>
              </View>
            </View>

            <View className="flex-row items-center p-4">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=100&auto=format&fit=crop' }}
                className="w-14 h-14 rounded-xl border border-gray-100"
              />
              <View className="ml-4 flex-1">
                <View className="flex-row justify-between">
                  <Text className="text-base font-bold text-gray-900">1x Coca-Cola 350ml</Text>
                  <Text className="font-bold text-gray-900">R$ 7,00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Forma de Pagamento */}
        <View className="px-4 mt-8">
          <Text className="text-lg font-bold mb-3">Forma de Pagamento</Text>
          <View className="gap-3">
            <TouchableOpacity
              onPress={() => setPaymentMethod('pix')}
              className={`flex-row items-center p-4 rounded-2xl border-2 ${paymentMethod === 'pix' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
            >
              <QrCode size={32} color={paymentMethod === 'pix' ? '#FF3838' : '#9CA3AF'} />
              <View className="ml-4 flex-1">
                <View className="flex-row items-center">
                  <Text className="font-bold text-gray-900">PIX</Text>
                  <View className="bg-green-500 px-2 py-0.5 rounded-full ml-2">
                    <Text className="text-white text-[8px] font-bold uppercase">Desconto</Text>
                  </View>
                </View>
                <Text className="text-xs text-gray-500">Pague agora e agilize sua entrega</Text>
              </View>
              {paymentMethod === 'pix' && <CheckCircle2 size={24} color="#FF3838" />}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPaymentMethod('cartao')}
              className={`flex-row items-center p-4 rounded-2xl border-2 ${paymentMethod === 'cartao' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
            >
              <CreditCard size={32} color={paymentMethod === 'cartao' ? '#FF3838' : '#9CA3AF'} />
              <View className="ml-4 flex-1">
                <Text className="font-bold text-gray-900">Cartão na Entrega</Text>
                <Text className="text-xs text-gray-500">Crédito ou Débito</Text>
              </View>
              {paymentMethod === 'cartao' && <CheckCircle2 size={24} color="#FF3838" />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Totais */}
        <View className="px-4 mt-8 pb-10">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="text-gray-900">R$ 61,90</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-gray-500">Taxa de Entrega</Text>
            <Text className="text-green-500 font-bold">Grátis</Text>
          </View>
          <View className="flex-row justify-between pt-4 border-t border-dashed border-gray-200">
            <Text className="text-lg font-bold text-gray-900">Total</Text>
            <Text className="text-2xl font-bold text-primary">R$ 61,90</Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão Finalizar */}
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 border-t border-gray-100 pb-10">
        <Button
          title="Finalizar Pedido"
          onPress={() => navigation.navigate('AcompanhamentoPedido')}
          className="h-16"
          icon={<ChevronRight size={24} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default FinalizacaoPedido;
