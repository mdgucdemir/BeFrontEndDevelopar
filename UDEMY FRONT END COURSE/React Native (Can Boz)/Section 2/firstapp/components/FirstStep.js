import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstStep = () => {
  const massage = "JavaScript";
  return (
    <View>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>React Js</Text>
      <Text style={{ fontSize: 25, color: "orange" }}>Inline Css</Text>
      <Text style={styles.subtitle}>{massage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 35,
    color: "pink",
  },
});

export default FirstStep;
