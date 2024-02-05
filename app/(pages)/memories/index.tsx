import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { memories } from "../../../constants/memories";
import { Stack, useRouter } from "expo-router";
import { FAB } from "react-native-paper";

export default function Memories() {
  const router = useRouter();
  return (
    <SafeAreaProvider style={{ backgroundColor: "#272f32" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView style={{ margin: 24 }}>
        {memories.map((memory, index) => {
          return (
            <View
              style={{
                marginBottom: 16,
                borderWidth: 2,
                borderColor: "#f2f2f3",
                borderRadius: 16,
                padding: 12,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
              key={index}
            >
              <Image
                style={{ width: 340, height: 250, borderRadius: 8 }}
                source={{ uri: memory.image }}
              />
              <View
                style={{
                  gap: 6,
                  marginLeft: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Gilroy-Bold",
                    color: "#272f32",
                  }}
                  onPress={() => router.push(`../memories/${memory.id}`)}
                >
                  {memory.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    color: "#b6babf",
                  }}
                >
                  {memory.date}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <FAB
        icon="plus"
        color="#272f32"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      />
    </SafeAreaProvider>
  );
}
