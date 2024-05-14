import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onsubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordDontMatch,
  } = credentialsInvalid;

  //   console.log(
  //     emailIsInvalid,
  //     emailDontMatch,
  //     passwordIsInvalid,
  //     passwordDontMatch
  //   );

  function submitHandler() {
    onsubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confrimEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "confrimPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Email Dogrulama"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, "confrimEmail")}
          value={enteredConfirmEmail}
          isInvalid={emailDontMatch}
        />
      )}
      <Input
        label="Password"
        secureTextEntry
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Password Dogrulama"
          secureTextEntry
          onUpdateValue={updateInput.bind(this, "confrimPassword")}
          value={enteredConfirmPassword}
          isInvalid={passwordDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Giris Yap" : "Kaydol"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
});
