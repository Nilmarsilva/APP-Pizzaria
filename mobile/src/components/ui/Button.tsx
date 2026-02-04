import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'admin';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * Componente de Botão reutilizável para o app mobile
 * Suporta diferentes variantes e estados
 */
export const Button = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  className = '',
  icon,
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary': return 'bg-primary';
      case 'secondary': return 'bg-gray-100';
      case 'outline': return 'bg-transparent border border-gray-300';
      case 'admin': return 'bg-primary-admin';
      default: return 'bg-primary';
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'secondary': return 'text-gray-900';
      case 'outline': return 'text-gray-700';
      default: return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center py-4 px-6 rounded-2xl ${getVariantStyles()} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'secondary' || variant === 'outline' ? '#000' : '#FFF'} />
      ) : (
        <View className="flex-row items-center">
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`font-semibold text-base ${getTextStyles()}`}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
