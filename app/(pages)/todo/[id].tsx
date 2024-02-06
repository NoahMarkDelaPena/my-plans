import { View, Text, ToastAndroid } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { gql, useQuery, useMutation } from "@apollo/client";
import client from "../../../graphql/client";
import { ActivityIndicator } from "react-native-paper";

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

const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      message
    }
  }
`;

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { data, loading, error } = useQuery(TODO_QUERY, { client });

  const [
    deleteTodo,
    { data: deletedData, loading: loadedData, error: loadingError },
  ] = useMutation(DELETE_TODO, {
    client,
  });

  if (loading)
    return (
      <Text>
        <ActivityIndicator animating={true} />
        Loading...
      </Text>
    );

  if (loadedData) {
    ToastAndroid.show("Task Deleted Successfully!", ToastAndroid.LONG);
    router.back();
  }
  if (error) return <Text>Error: {error.message}</Text>;

  const selectedTask = data.todos.find((task: any) => task.id === id);

  if (!selectedTask) return <Text>Task not found</Text>;

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
            <View style={{ flexDirection: "row", gap: 12 }}>
              <MaterialIcons
                name="update"
                size={24}
                color="white"
                onPress={() => router.push(`./updateTodo/${id}`)}
              />
              <MaterialIcons
                name="delete"
                size={24}
                color="white"
                onPress={() =>
                  deleteTodo({
                    variables: {
                      id: selectedTask.id,
                    },
                    onError(error) {
                      console.log("On Press: ", error);
                    },
                  })
                }
              />
            </View>
          ),
        }}
      />
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
