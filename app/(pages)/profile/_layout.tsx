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
          title: "Profile",
          headerBackButtonMenuEnabled: true,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="editProfile"
        options={{
          headerBackButtonMenuEnabled: true,
          headerBackVisible: true,
          title: "Edit Profile",
        }}
      />
    </Stack>
  );
}
