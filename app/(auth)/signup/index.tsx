import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Button, Checkbox, TextInput } from "react-native-paper";
import React from "react";
import { useRouter } from "expo-router";

export default function SignUp() {
  const [checked, setChecked] = React.useState(false);
  const router = useRouter();
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#272f32",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "35%",
          backgroundColor: "white",
          borderBottomLeftRadius: 100,
          padding: 48,
          gap: 40,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={32}
          color="#272f32"
          style={{ marginTop: 32 }}
          onPress={() => router.back()}
        />
        <View>
          <Text
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: 28,
              color: "#272f32",
            }}
          >
            Create an account.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 16,
          padding: 48,
        }}
      >
        <View style={{ gap: 20 }}>
          <TextInput
            label="Name"
            mode="outlined"
            left={<TextInput.Icon icon="email-edit-outline" color="white" />}
            activeUnderlineColor="white"
            activeOutlineColor="white"
            outlineColor="white"
            textColor="white"
            style={{ backgroundColor: "#272f32", fontFamily: "Gilroy-Regular" }}
          />
          <TextInput
            label="Email"
            mode="outlined"
            left={<TextInput.Icon icon="email-edit-outline" color="white" />}
            activeUnderlineColor="white"
            activeOutlineColor="white"
            outlineColor="white"
            textColor="white"
            style={{ backgroundColor: "#272f32", fontFamily: "Gilroy-Regular" }}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" color="white" />}
            right={<TextInput.Icon icon="eye" color="white" />}
            activeUnderlineColor="white"
            activeOutlineColor="white"
            outlineColor="white"
            textColor="white"
            style={{ backgroundColor: "#272f32", fontFamily: "Gilroy-Regular" }}
          />
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" color="white" />}
            right={<TextInput.Icon icon="eye" color="white" />}
            activeUnderlineColor="white"
            activeOutlineColor="white"
            outlineColor="white"
            textColor="white"
            style={{ backgroundColor: "#272f32", fontFamily: "Gilroy-Regular" }}
          />
        </View>

        <View style={{ marginTop: 48, gap: 16 }}>
          <Button
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 48,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Text
              style={{ color: "#272f32", fontFamily: "Gilroy-SemiBold" }}
              onPress={() => router.push("./signin")}
            >
              Sign Up
            </Text>
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: 12,
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color="white"
            uncheckedColor="white"
          />
          <Text style={{ color: "white" }}>Agree to Terms and Conditions</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
