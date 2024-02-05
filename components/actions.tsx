import { useRouter } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider } from "react-native-paper";

const Actions = () => {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "flex-end",
        zIndex: 99,
        position: "absolute",
        right: 20,
        borderWidth: 1,
        borderColor: "#d2d2d2",
      }}
    >
      <Menu.Item
        leadingIcon="update"
        // onPress={() => router.push("../app/(pages)/todo/updateTask")}
        title="Update Task"
      />
      <Menu.Item leadingIcon="delete" onPress={() => {}} title="Delete Task" />
    </View>
  );
};

export default Actions;
