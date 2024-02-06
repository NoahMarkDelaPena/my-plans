import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Text, View, Pressable, ToastAndroid } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import client from "../../../graphql/client";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-paper";

const ADD_TODO = gql`
  mutation CreateTodo($title: String!, $description: String!) {
    createTodo(createTodoInput: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export default function AddTodo() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, { client });
  const router = useRouter();

  if (loading) {
    ToastAndroid.show("Task added Successfully!", ToastAndroid.LONG);
    console.log(data);
  }

  if (error)
    return (
      <Text
        style={{
          fontSize: 20,
          color: "#333",
          textAlign: "center",
          fontFamily: "Gilroy-Bold",
        }}
      >
        `Submission error! ${error.message}`
      </Text>
    );
  console.log(data);

  return (
    <View style={{ backgroundColor: "#272f32" }}>
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
          Add Task
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
          value={title}
          placeholder={"Enter title"}
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
          value={description}
          placeholder={"Enter description"}
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
          onPress={() => addTodo({ variables: { title, description } })}
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
            Add Task
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
