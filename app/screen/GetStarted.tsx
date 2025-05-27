import React from "react";
import { View, Text, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const GetStarted = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const navigateToAlertScreen = () => {
    router.push("/(PatientDashboard)/(home)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingTop: insets.top, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-4xl font-extrabold text-primary mb-4">
            🚨 Welcome!
          </Text>
          <Text className="text-4xl font-extrabold text-primary mb-4">
            Lifeline Alert
          </Text>
          <Text className="text-lg text-gray-600 text-center mb-6">
            Quickly alert emergency medical services (SAMU) in case of an accident and get help fast.
          </Text>

          {/* Features Section */}
          <View className="w-full mb-14">
            <View className="flex-row items-center mb-4">
              <Ionicons name="alert-circle" size={24} color="#cdbd8e" />
              <Text className="ml-4 text-base text-gray-700">
                Send an emergency alert with your location in one click.
              </Text>
            </View>
            <View className="flex-row items-center mb-4">
              <Ionicons name="notifications" size={24} color="#cdbd8e" />
              <Text className="ml-4 text-base text-gray-700">
                Receive notifications about the status of your alert.
              </Text>
            </View>
            <View className="flex-row items-center mb-4">
              <Ionicons name="call" size={24} color="#cdbd8e" />
              <Text className="ml-4 text-base text-gray-700">
                Share your phone number for quick follow-up if needed.
              </Text>
            </View>
          </View>

          {/* Get Started Button */}
          <Pressable
            className="bg-primary px-6 py-4 rounded-full"
            onPress={navigateToAlertScreen}
          >
            <Text className="text-white text-lg font-bold">Get Started 🚨</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetStarted;
