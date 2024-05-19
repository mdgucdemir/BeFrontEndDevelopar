import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function input({ label, textInputConfig, style, invalid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: "#2196f3",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#c5cae9",
    padding: 8,
    borderRadius: 10,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: "#e91e63",
  },
  invalidInput: {
    backgroundColor: "#f8bbd0",
  },
});
