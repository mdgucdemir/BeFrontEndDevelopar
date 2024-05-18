import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CoursesSummary({ periodName, courses }) {
  const coursesSum = courses.reduce((sum, course) => {
    return sum + course.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{periodName}</Text>
      <Text style={styles.cost}>{coursesSum + " TL"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2196f3",
    padding: 8,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 12,
  },
  cost: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
