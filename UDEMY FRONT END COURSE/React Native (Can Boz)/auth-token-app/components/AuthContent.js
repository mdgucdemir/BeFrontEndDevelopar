import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    // console.log(credentials);
    let { confirmEmail, confirmPassword, email, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEquel = email === confirmEmail;
    const passwordsAreEquel = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEquel || !passwordsAreEquel))
    ) {
      Alert.alert("Ooops", "Lutfen girdiginiz degerleri kontrol ediniz");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEquel,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEquel,
      });
      return;
    }

    onAuthenticate({ email, password });
  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <AuthForm
        credentialsInvalid={credentialsInvalid}
        isLogin={isLogin}
        onsubmit={submitHandler}
      />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Yeni Kullanici Olustur" : "Giris Yap"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
