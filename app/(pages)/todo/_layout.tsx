import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#272f32",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackVisible: true,
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerBackButtonMenuEnabled: true,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{ headerBackButtonMenuEnabled: true, headerBackVisible: true }}
      />
      <Stack.Screen name="updateTask" />
    </Stack>
  );
}
