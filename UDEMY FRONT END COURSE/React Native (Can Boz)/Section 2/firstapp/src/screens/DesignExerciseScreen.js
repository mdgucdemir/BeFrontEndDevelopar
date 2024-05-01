import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignExerciseScreen() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.style1} />
      <View style={styles.style2} />
      <View style={styles.style3} />
      <View style={styles.style4} />
    </View>
  );
}

const styles = StyleSheet.create({
  style1: {
    position: "absolute",
    backgroundColor: "red",
    top: 0,
    left: 0,
    width: "25%",
    height: "25%",
  },
  style2: {
    position: "absolute",
    backgroundColor: "blue",
    top: 0,
    right: 0,
    width: "25%",
    height: "25%",
  },
  style3: {
    position: "absolute",
    backgroundColor: "green",
    bottom: 0,
    left: 0,
    width: "25%",
    height: "25%",
  },
  style4: {
    position: "absolute",
    backgroundColor: "yellow",
    bottom: 0,
    right: 0,
    width: "25%",
    height: "25%",
  },
});
