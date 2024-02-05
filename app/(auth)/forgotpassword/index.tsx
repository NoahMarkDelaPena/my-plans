import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
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
              fontSize: 26,
              color: "#272f32",
            }}
          >
            Change Password?
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Gilroy-Medium",
              color: "#272f32",
            }}
          >
            Enter your email where the new password will be sent.
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
            <Text style={{ color: "#272f32", fontFamily: "Gilroy-SemiBold" }}>
              Send Email
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
