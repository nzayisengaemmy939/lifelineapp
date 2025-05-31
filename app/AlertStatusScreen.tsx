import React from 'react';
import { View, Text } from 'react-native';

export default function AlertStatusScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-green-50 p-5">
      <Text className="text-5xl text-green-500 mb-5">✅</Text>
      <Text className="text-2xl font-bold text-green-700 mb-4 text-center">Alert Status</Text>
      <Text className="text-lg text-gray-700 text-center leading-6">✔️ Alert received</Text>
      <Text className="text-lg text-gray-700 text-center leading-6">🚑 Ambulance dispatched</Text>
      <Text className="text-lg text-gray-700 text-center leading-6">🕒 ETA: 5 minutes</Text>
    </View>
  );
}
