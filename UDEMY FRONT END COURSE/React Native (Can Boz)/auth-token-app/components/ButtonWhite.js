import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ButtonWhite({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    textAlign: "left",
    color: "#1976d2",
    // fontWeight: "700",
  },
});
