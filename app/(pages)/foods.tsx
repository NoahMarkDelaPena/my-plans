import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { foods } from "../../constants/foods";
import { FAB } from "react-native-paper";

export default function Foods() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#272f32" }}>
      <ScrollView style={{ margin: 24 }} horizontal={true}>
        {foods.map((food, index) => {
          return (
            <View
              style={{
                borderWidth: 2,
                borderColor: "#f2f2f3",
                borderRadius: 16,
                padding: 12,
                flexDirection: "column",
                marginRight: 20,
                backgroundColor: "white",
              }}
              key={index}
            >
              <Image
                style={{ width: 350, height: 650, borderRadius: 8 }}
                source={{ uri: food.image }}
              />
              <View style={{ gap: 6, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Gilroy-Bold",
                    color: "#272f32",
                  }}
                  // onPress={() => router.push(`../todo/${food.id}`)}
                >
                  {food.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    color: "#b6babf",
                  }}
                >
                  {food.description}
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
