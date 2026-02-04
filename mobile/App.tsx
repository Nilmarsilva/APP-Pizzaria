import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Utensils, History, User, BadgePercent, LayoutDashboard, ListPlus, Settings, Users, DollarSign, Bell } from 'lucide-react-native';

// Importando telas do Cliente
import HomeCardapio from './src/screens/client/HomeCardapio';
import PersonalizacaoPizza from './src/screens/client/PersonalizacaoPizza';
import FinalizacaoPedido from './src/screens/client/FinalizacaoPedido';
import AcompanhamentoPedido from './src/screens/client/AcompanhamentoPedido';
import Fidelidade from './src/screens/client/Fidelidade';
import Perfil from './src/screens/client/Perfil';
import CadastroUsuario from './src/screens/client/CadastroUsuario';
import MeusPedidos from './src/screens/client/MeusPedidos';
import Notificacoes from './src/screens/client/Notificacoes';

// Importando telas do Admin
import DashboardDesempenho from './src/screens/admin/DashboardDesempenho';
import LancamentoPedidos from './src/screens/admin/LancamentoPedidos';
import ConfiguracoesGerais from './src/screens/admin/ConfiguracoesGerais';
import GestaoEntregadores from './src/screens/admin/GestaoEntregadores';
import AcertoFinanceiro from './src/screens/admin/AcertoFinanceiro';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação em Abas do Cliente
function ClientTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF3838',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: '#F3F4F6',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeCardapio}
        options={{
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({ color }) => <Utensils size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Fidelidade"
        component={Fidelidade}
        options={{
          tabBarLabel: 'Fidelidade',
          tabBarIcon: ({ color }) => <BadgePercent size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="MeusPedidosTab"
        component={MeusPedidos}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => <History size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Navegação em Abas do Admin
function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF3838',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: { height: 60, paddingBottom: 10 },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardDesempenho}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Lancamento"
        component={LancamentoPedidos}
        options={{
          tabBarLabel: 'Vendas',
          tabBarIcon: ({ color }) => <ListPlus size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Financeiro"
        component={AcertoFinanceiro}
        options={{
          tabBarLabel: 'Financeiro',
          tabBarIcon: ({ color }) => <DollarSign size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={ConfiguracoesGerais}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Telas de Entrada */}
        <Stack.Screen name="Cadastro" component={CadastroUsuario} />

        {/* Fluxos Principais */}
        <Stack.Screen name="ClientFlow" component={ClientTabs} />
        <Stack.Screen name="AdminFlow" component={AdminTabs} />

        {/* Telas de Detalhe Cliente */}
        <Stack.Screen name="PersonalizacaoPizza" component={PersonalizacaoPizza} />
        <Stack.Screen name="FinalizacaoPedido" component={FinalizacaoPedido} />
        <Stack.Screen name="AcompanhamentoPedido" component={AcompanhamentoPedido} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="MeusPedidos" component={MeusPedidos} />

        {/* Telas de Detalhe Admin */}
        <Stack.Screen name="GestaoEntregadores" component={GestaoEntregadores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
