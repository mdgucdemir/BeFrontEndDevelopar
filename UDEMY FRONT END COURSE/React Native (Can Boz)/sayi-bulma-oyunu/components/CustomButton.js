import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CustomButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
