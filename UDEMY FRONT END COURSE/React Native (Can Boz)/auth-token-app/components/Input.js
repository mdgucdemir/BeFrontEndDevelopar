import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateValue,
  value,
  secureTextEntry,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 3,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
    backgroundColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  inputInvalid: {
    borderWidth: 1,
    borderColor: "red",
  },
});
