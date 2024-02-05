import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, Stack } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import client from "../../../graphql/client";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useState } from "react";
import Actions from "../../../components/actions";

const TODO_QUERY = gql`
  query todos {
    todos {
      id
      title
      description
      status
      createdAt
    }
  }
`;

export default function Details() {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = useQuery(TODO_QUERY, { client });
  const [menu, setMenu] = useState(false);

  if (loading)
    return (
      <Text>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
        Loading...
      </Text>
    );
  if (error) return <Text>Error: {error.message}</Text>;

  const selectedTask = data.todos.find((task: any) => task.id === id);

  if (!selectedTask) return <Text>Task not found</Text>;

  const handleToggle = () => {
    setMenu(!menu);
  };

  return (
    <View
      style={{
        marginBottom: 16,
        borderWidth: 2,
        borderColor: "#f2f2f3",
        borderRadius: 16,
        padding: 12,
        gap: 6,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: selectedTask.title,
          headerRight: () => (
            <Feather
              name="more-vertical"
              size={24}
              color="white"
              onPress={handleToggle}
            />
          ),
        }}
      />
      {menu && <Actions />}
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Gilroy-SemiBold",
          color: "#b6babf",
        }}
      >
        {selectedTask.createdAt}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Gilroy-Bold",
          color: "#272f32",
        }}
      >
        {selectedTask.description}
      </Text>
      <View>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Gilroy-SemiBold",
            color: "#b6babf",
          }}
        >
          {selectedTask.status ? "Done" : "Not Done"}
        </Text>
      </View>
    </View>
  );
}
