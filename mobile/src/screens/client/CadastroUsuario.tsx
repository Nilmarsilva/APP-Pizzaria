import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { ChevronLeft, Mail, Lock, User, Phone } from 'lucide-react-native';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const CadastroUsuario = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8">
            <ChevronLeft size={28} color="#181111" />
          </TouchableOpacity>

          <View className="mb-8">
            <Text className="text-3xl font-black text-gray-900">Criar Conta</Text>
            <Text className="text-gray-500 mt-2">Cadastre-se para aproveitar nossos benefícios e acumular pontos!</Text>
          </View>

          <View className="gap-2">
            <Input
              label="Nome Completo"
              placeholder="Ex: João da Silva"
              autoCapitalize="words"
            />
            <Input
              label="E-mail"
              placeholder="exemplo@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              label="Telefone / WhatsApp"
              placeholder="(11) 99999-9999"
              keyboardType="phone-pad"
            />
            <Input
              label="Senha"
              placeholder="••••••••"
              secureTextEntry
            />
          </View>

          <Button
            title="Criar Minha Conta"
            onPress={() => navigation.navigate('Home')}
            className="mt-6 h-16"
          />

          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-500">Já tem uma conta? </Text>
            <TouchableOpacity>
              <Text className="text-primary font-bold">Fazer Login</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-12 items-center">
            <Text className="text-gray-400 text-xs text-center">
              Ao criar uma conta, você concorda com nossos Termos de Uso e Política de Privacidade.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CadastroUsuario;
