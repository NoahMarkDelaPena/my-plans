import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Divider, List, Switch } from "react-native-paper";
import { useRouter, Stack } from "expo-router";

export default function Profile() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const router = useRouter();
  return (
    <SafeAreaProvider style={{ backgroundColor: "#272f32" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ margin: 24 }}>
        <Text
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: 24,
            color: "white",
            marginVertical: 24,
          }}
        >
          Settings and Profile
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
        <View>
          <List.Section>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <List.Icon color="#272f32" icon="account-check" />
              <List.Subheader
                style={{ fontFamily: "Gilroy-Bold", fontSize: 16 }}
              >
                Account
              </List.Subheader>
            </View>
            <List.Item
              title="Edit Profile"
              right={() => <List.Icon icon="chevron-right" color="#b6babf" />}
              titleStyle={{
                fontFamily: "Gilroy-SemiBold",
                color: "#b6babf",
                fontSize: 12,
              }}
              onPress={() => router.push("../profile/editProfile")}
            />
            <List.Item
              title="Connect Socials"
              right={() => <List.Icon icon="chevron-right" color="#b6babf" />}
              titleStyle={{
                fontFamily: "Gilroy-SemiBold",
                color: "#b6babf",
                fontSize: 12,
              }}
            />
          </List.Section>
          <Divider />
        </View>
        <View>
          <List.Section>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <List.Icon color="#272f32" icon="bell-badge" />
              <List.Subheader
                style={{ fontFamily: "Gilroy-Bold", fontSize: 16 }}
              >
                Notifications
              </List.Subheader>
            </View>
            <List.Item
              title="Push Notifications"
              right={() => (
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#272f32"
                />
              )}
              titleStyle={{
                fontFamily: "Gilroy-SemiBold",
                color: "#b6babf",
                fontSize: 12,
              }}
            />
          </List.Section>
          <Divider />
        </View>
        <View>
          <List.Section>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <List.Icon color="#272f32" icon="brightness-6" />
              <List.Subheader
                style={{ fontFamily: "Gilroy-Bold", fontSize: 16 }}
              >
                Theme
              </List.Subheader>
            </View>
            <List.Item
              title="Dark Mode"
              right={() => (
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#272f32"
                />
              )}
              titleStyle={{
                fontFamily: "Gilroy-SemiBold",
                color: "#b6babf",
                fontSize: 12,
              }}
            />
          </List.Section>
          <Divider />
        </View>
        <Button
          style={{
            marginTop: 86,
            backgroundColor: "#272f32",
            width: "100%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
          textColor="white"
          onPress={() => router.push("../(auth)/signin")}
          labelStyle={{ fontFamily: "Gilroy-SemiBold" }}
        >
          Sign out
        </Button>
      </View>
    </SafeAreaProvider>
  );
}
