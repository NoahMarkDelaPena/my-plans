import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import { useCallback } from "react";

export default function App() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.ttf"),
    "Gilroy-Black": require("../assets/fonts/Gilroy-Black.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Image
        source={require("../assets/bg.jpg")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      <View
        style={{
          backgroundColor: "#272f32",
          position: "absolute",
          zIndex: 10,
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      >
        <Text
          style={{
            color: "white",
            marginTop: "70%",
            marginHorizontal: 48,
            fontSize: 24,
            fontFamily: "Gilroy-Bold",
          }}
        >
          Your Personal Activity Planner
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "35%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderTopRightRadius: 100,
          zIndex: 15,
          padding: 48,
          gap: 32,
        }}
      >
        <Text style={{ fontFamily: "Gilroy-Medium", lineHeight: 18 }}>
          Seamless Days, Planned Your Way: Your Life, Your Rhythm
        </Text>
        <Pressable
          style={{
            backgroundColor: "#272f32",
            width: "100%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "Gilroy-SemiBold" }}
            onPress={() => router.push("./signin")}
          >
            Sign in
          </Text>
        </Pressable>

        <View
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Text
            style={{ color: "#272f32" }}
            onPress={() => router.push("./signup")}
          >
            Create an account
          </Text>
          <AntDesign name="arrowright" size={24} color="#272f32" />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
