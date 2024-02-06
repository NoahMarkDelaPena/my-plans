import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Text, View, Pressable, ToastAndroid } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import client from "../../../../graphql/client";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { TextInput } from "react-native-paper";

const FETCH_TODO = gql`
  query todos {
    todos {
      id
      title
      description
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $title: String!, $description: String!) {
    updateTodo(
      updateTodoInput: { title: $title, description: $description }
      id: $id
    ) {
      title
      description
      id
    }
  }
`;

export default function UpdateTodo() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const {
    data: fetchedData,
    loading: fetchLoading,
    error: errorFetching,
  } = useQuery(FETCH_TODO, { client });

  const [updateTodo, { data, loading, error }] = useMutation(UPDATE_TODO, {
    client,
  });

  const selectedTask = fetchedData.todos.find((task: any) => task.id === id);

  if (errorFetching || error) {
    ToastAndroid.show(`Submission error! ${error?.message}`, ToastAndroid.LONG);
  }

  if (loading || fetchLoading) {
    ToastAndroid.show("Task added Successfully!", ToastAndroid.LONG);
    console.log(data);
  }

  return (
    <View style={{ backgroundColor: "#272f32" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ margin: 24 }}>
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
          Update Task
        </Text>
      </View>
      <View
        style={{
          height: "85%",
          backgroundColor: "white",
          borderTopRightRadius: 100,
          paddingHorizontal: 48,
          paddingVertical: 120,
          gap: 16,
        }}
      >
        <TextInput
          placeholder={selectedTask.title}
          onChangeText={settitle}
          mode="outlined"
          left={<TextInput.Icon icon="check" color="#272f32" />}
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
        <TextInput
          placeholder={selectedTask.description}
          onChangeText={setDescription}
          mode="outlined"
          left={<TextInput.Icon icon="check" color="#272f32" />}
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
        <Pressable
          onPress={() =>
            updateTodo({
              variables: {
                title,
                description,
                id: selectedTask.id,
              },
              onError(error) {
                console.log("On Press: ", error);
              },
            })
          }
          style={{
            marginTop: 64,
            backgroundColor: "#272f32",
            width: "100%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontFamily: "Gilroy-SemiBold" }}>
            Update Task
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
