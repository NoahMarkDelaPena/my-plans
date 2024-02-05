import {
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, Checkbox, FAB } from "react-native-paper";
import { useRouter, Stack } from "expo-router";
import { tasks } from "../../../constants/todo";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../../graphql/client";

const TODO_QUERY = gql`
  query todos {
    todos {
      id
      title
      description
      createdAt
      status
    }
  }
`;

function getFormattedDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const monthName = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  const { data, loading, error } = useQuery(TODO_QUERY, { client });
  const totalTasks = data.todos.length;

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider
      style={{ backgroundColor: "#272f32", justifyContent: "space-between" }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar backgroundColor="#272f32" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 48,
          gap: 28,
        }}
      >
        <Avatar.Image size={48} source={require("../../../assets/icon.png")} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontFamily: "Gilroy-SemiBold" }}>
            Welcome, Noah Mark
          </Text>
          <Text style={{ color: "white", fontFamily: "Gilroy-Light" }}>
            You have {totalTasks} {totalTasks === 1 ? "task" : "tasks"} today!
          </Text>
        </View>
      </View>
      <View
        style={{
          height: "75%",
          backgroundColor: "white",
          borderTopRightRadius: 100,
          gap: 32,
        }}
      >
        <Text
          style={{
            color: "#272f32",
            fontFamily: "Gilroy-SemiBold",
            marginTop: 48,
            marginHorizontal: 48,
          }}
        >
          {currentDate}
        </Text>
        <FlatList
          style={styles.list}
          data={data.todos}
          renderItem={({ item }) => (
            <Pressable
              style={styles.jobCard}
              onPress={() => router.push(`../todo/${item.id}`)}
            >
              <Text style={styles.jobCompany}>{item.createdAt}</Text>
              <Text style={styles.jobTitle}>{item.title}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <FAB
        icon="plus"
        color="#272f32"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  list: {
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
  },
  jobInfo: {
    flex: 1,
    padding: 10,
  },
  jobCard: {
    backgroundColor: "#fff",
    borderColor: "#f2f2f3",
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 48,
    padding: 16,
    marginVertical: 8,
  },
  jobTitle: {
    fontSize: 20,
    marginBottom: 5,
    color: "#272f32",
    fontFamily: "Gilroy-Bold",
  },
  jobCompany: {
    fontSize: 10,
    marginBottom: 5,
    fontFamily: "Gilroy-Bold",
    color: "#b6babf",
  },
  infoText: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    fontFamily: "Gilroy-Bold",
  },
  errorText: {
    color: "#ce2727",
  },
});
