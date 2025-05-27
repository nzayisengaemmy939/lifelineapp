import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({ text, onPress, className, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`bg-primary rounded-full h-10 px-6 flex justify-center items-center rounded ${
        disabled ? "bg-gray-400" : ""
      } ${className}`}
    >
      <Text className={`font-bold ${disabled ? "text-gray-300" : "text-white"}`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
