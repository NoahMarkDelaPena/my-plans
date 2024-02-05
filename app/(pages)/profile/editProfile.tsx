import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, TextInput, Button } from "react-native-paper";
import { users } from "../../../constants/users";

export default function EditProfile() {
  const router = useRouter();
  const userName = users.length > 0 ? users[0].name : "";
  const userEmail = users.length > 0 ? users[0].email : "";
  const userPassword = users.length > 0 ? users[0].password : "";

  return (
    <SafeAreaProvider style={{ backgroundColor: "#272f32" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          margin: 24,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={32}
          color="white"
          onPress={() => router.back()}
        />
        <Text
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: 24,
            color: "white",
            marginVertical: 24,
          }}
        >
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          height: "85%",
          backgroundColor: "white",
          borderTopRightRadius: 100,
          padding: 48,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
          }}
        >
          <View>
            <Avatar.Image
              size={82}
              source={require("../../../assets/icon.png")}
            />
            <Avatar.Icon
              icon="pencil-circle"
              color="#272f32"
              style={{
                position: "absolute",
                margin: 16,
                right: -30,
                bottom: -30,
                backgroundColor: "rgba(52, 52, 52, 0)",
              }}
            />
          </View>
          <View style={{ gap: 24 }}>
            <View style={{ gap: 8 }}>
              <Text style={{ color: "#272f32", fontFamily: "Gilroy-SemiBold" }}>
                Name
              </Text>
              <TextInput
                value={userName}
                mode="outlined"
                left={<TextInput.Icon icon="account-check" color="#272f32" />}
                activeUnderlineColor="#f2f2f3"
                activeOutlineColor="#272f32"
                outlineColor="#f2f2f3"
                textColor="#b6babf"
                style={{
                  backgroundColor: "white",
                }}
                autoCapitalize="none"
                contentStyle={{ fontFamily: "Gilroy-Medium" }}
              />
            </View>
            <View style={{ gap: 8 }}>
              <Text style={{ color: "#272f32", fontFamily: "Gilroy-SemiBold" }}>
                Email
              </Text>
              <TextInput
                value={userEmail}
                mode="outlined"
                left={
                  <TextInput.Icon icon="email-edit-outline" color="#272f32" />
                }
                activeUnderlineColor="#f2f2f3"
                activeOutlineColor="#272f32"
                outlineColor="#f2f2f3"
                textColor="#b6babf"
                style={{
                  backgroundColor: "white",
                  width: 320,
                }}
                autoCapitalize="none"
                contentStyle={{ fontFamily: "Gilroy-Medium" }}
              />
            </View>
            <View style={{ gap: 8 }}>
              <Text style={{ color: "#272f32", fontFamily: "Gilroy-SemiBold" }}>
                Password
              </Text>
              <TextInput
                secureTextEntry
                value={userPassword}
                mode="outlined"
                left={<TextInput.Icon icon="lock-outline" color="#272f32" />}
                right={<TextInput.Icon icon="eye" color="#272f32" />}
                activeUnderlineColor="#f2f2f3"
                activeOutlineColor="#272f32"
                outlineColor="#f2f2f3"
                textColor="#b6babf"
                style={{
                  backgroundColor: "white",
                  width: 320,
                }}
                contentStyle={{ fontFamily: "Gilroy-Medium" }}
                autoCapitalize="none"
              />
            </View>
          </View>
          <Button
            style={{
              marginTop: 64,
              backgroundColor: "#272f32",
              width: "100%",
              height: 48,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
            textColor="white"
            onPress={() => router.back()}
            labelStyle={{ fontFamily: "Gilroy-SemiBold" }}
          >
            Save Changes
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
