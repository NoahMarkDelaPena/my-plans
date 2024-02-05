import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import { memories } from "../../../constants/memories";

export default function Details() {
  const { id } = useLocalSearchParams();

  const selectedMemory = memories.find((memory) => memory.id === id);

  if (!selectedMemory) {
    return (
      <View>
        <Text>No details found for the specified id: {id}</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        marginBottom: 16,
        borderWidth: 2,
        borderColor: "#f2f2f3",
        borderRadius: 16,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Stack.Screen options={{ headerTitle: selectedMemory.title }} />
      <Image
        style={{ width: 340, height: 250, borderRadius: 8 }}
        source={{ uri: selectedMemory.image }}
      />
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Gilroy-SemiBold",
          color: "#b6babf",
        }}
      >
        {selectedMemory.date}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Gilroy-Bold",
          color: "#272f32",
        }}
      >
        {selectedMemory.description}
      </Text>
    </View>
  );
}
