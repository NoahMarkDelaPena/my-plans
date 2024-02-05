import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

// import { users } from "../../../constants/users";

export default function SignIn() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const handleChangeEmail = (
  //   e: NativeSyntheticEvent<TextInputChangeEventData>
  // ) => {
  //   setEmail(e.nativeEvent.text);
  // };

  // const handleChangePassword = (
  //   e: NativeSyntheticEvent<TextInputChangeEventData>
  // ) => {
  //   setPassword(e.nativeEvent.text);
  // };

  // const handleLogin = () => {
  //   const userWithEmail = users.find((user) => user.email === email);
  //   const userWithPassword = users.find((user) => user.password === password);

  //   if (userWithEmail && userWithPassword) {
  //     router.push("../../(pages)/todo/");
  //   } else {
  //     console.log("Invalid email or user not found");
  //   }
  // };

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
            Welcome Back!
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Gilroy-Medium",
              color: "#272f32",
            }}
          >
            Continue your plans.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 48,
          padding: 48,
        }}
      >
        <View style={{ gap: 32 }}>
          <TextInput
            label="Email"
            mode="outlined"
            left={<TextInput.Icon icon="email-edit-outline" color="white" />}
            activeUnderlineColor="white"
            activeOutlineColor="white"
            outlineColor="white"
            textColor="white"
            style={{ backgroundColor: "#272f32", fontFamily: "Gilroy-Regular" }}
            // value={email}
            // onChange={handleChangeEmail}
            autoCapitalize="none"
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
            // onChange={handleChangePassword}
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: 16,
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
          <Text style={{ color: "white", fontFamily: "Gilroy-SemiBold" }}>
            Remember me
          </Text>
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
              // onPress={handleLogin}
              onPress={() => router.push("../../(pages)/todo/")}
            >
              Sign in
            </Text>
          </Button>
          <Text
            style={{ alignSelf: "flex-end", color: "white" }}
            onPress={() => router.push("../forgotpassword")}
          >
            Forgot password?
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
