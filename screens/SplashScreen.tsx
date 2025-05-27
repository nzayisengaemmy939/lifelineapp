import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-700">
      <Text className="text-white text-3xl font-extrabold tracking-wider shadow-lg">
        Lifeline Alert
      </Text>
    </View>
  );
}
