import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate("Courses")}
    //   />
    // </View>
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
