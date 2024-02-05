import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Page() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="todo"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#272f32" />,
          tabBarActiveTintColor: "#272f32",
          tabBarStyle: {
            height: 56,
          },
        }}
      />
      <Tabs.Screen
        name="memories"
        options={{
          title: "Memories",
          tabBarIcon: () => (
            <Ionicons name="infinite" size={24} color="#272f32" />
          ),
          tabBarActiveTintColor: "#272f32",
          tabBarStyle: {
            height: 56,
          },
        }}
      />
      <Tabs.Screen
        name="foods"
        options={{
          title: "Foods",
          tabBarIcon: () => (
            <Ionicons name="fast-food" size={24} color="#272f32" />
          ),
          tabBarActiveTintColor: "#272f32",
          tabBarStyle: {
            height: 56,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome6 name="user-gear" size={24} color="#272f32" />
          ),
          tabBarActiveTintColor: "#272f32",
          tabBarStyle: {
            height: 56,
          },
        }}
      />
    </Tabs>
  );
}
