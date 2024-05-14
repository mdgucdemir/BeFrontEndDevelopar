import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useContext } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";
import { AuthContext } from "../store/auth-context";

export default function SignupScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Kayit Olunamadi", "Lutfen bilgilerinizi kontrol ediniz");
    }

    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Kullanici olusturuluyor..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
