import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const LessonFlatList = () => {
  const DATA = [
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
    <View>
      <FlatList
        data={DATA}
        renderItem={(item) => (
          <Text style={styles.content}>{item.item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 10,
    padding: 20,
  },
});

export default LessonFlatList;
