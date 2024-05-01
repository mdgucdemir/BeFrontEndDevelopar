import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CoursesScreen() {
  const data = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "React Native",
    },
    {
      id: 3,
      title: "Javascript",
    },
    {
      id: 4,
      title: "Typescript",
    },
    {
      id: 5,
      title: "Angular",
    },
    {
      id: 6,
      title: "CSS",
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <Text style={styles.content}>{item.item.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 10,
    padding: 20,
  },
});
