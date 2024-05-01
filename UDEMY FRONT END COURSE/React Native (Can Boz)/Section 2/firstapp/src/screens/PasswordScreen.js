import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.main}>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        defaultValue={password}
        // value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        secureTextEntry={true}
      />
      {password.length < 6 ? <Text>Password at least 6 character</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
