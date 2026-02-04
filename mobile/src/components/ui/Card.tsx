import React from 'react';
import { View, TouchableOpacity, ViewProps, TouchableOpacityProps } from 'react-native';

interface CardProps extends ViewProps {
  onPress?: () => void;
  className?: string;
  children: React.ReactNode;
}

/**
 * Componente de Card reutilizável para o app mobile
 * Pode ser clicável ou apenas um container visual
 */
export const Card = ({ onPress, className = '', children, ...props }: CardProps) => {
  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 ${className}`}
        {...(props as TouchableOpacityProps)}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View
      className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};
