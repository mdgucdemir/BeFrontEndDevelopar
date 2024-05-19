import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ErrorText({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HATA!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#e91e63",
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    color: "#e91e63",
  },
});
