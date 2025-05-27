import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get('window');

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#cdbd8e",
        tabBarInactiveTintColor: "#0e395f",
        headerShown: false,
        tabBarStyle: {
          height: Platform.select({ ios: 100, android: 90 }),
          paddingBottom: Platform.select({ ios: 35, android: 25 }), 
          paddingTop: 5,
          borderTopWidth: 1,
          borderTopColor: "#E0E0fd",
          backgroundColor: "white",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 6,
        },
        tabBarLabelStyle: {
          color: "#0e395f",
          fontSize: 13,
          fontWeight: "700",
          fontFamily: "Inter",
        },
        tabBarIconStyle: {
          marginBottom: -5,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={28}
              color={focused ? "#0e395f" : "#cdbd8e"}
            />
          ),
          tabBarItemStyle: {
            height: Platform.OS === 'ios' ? 70 : 60,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Tabs>
  );
}
