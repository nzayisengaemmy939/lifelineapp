import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function AlertSentScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AlertStatus');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-6xl text-green-500 mb-4">✅</Text>
      <Text className="text-2xl font-bold text-gray-800 mb-2 text-center">Alert Sent</Text>
      <Text className="text-base text-gray-600 text-center leading-6">
        The alert has been successfully received and help is on the way.
      </Text>
    </View>
  );
}
