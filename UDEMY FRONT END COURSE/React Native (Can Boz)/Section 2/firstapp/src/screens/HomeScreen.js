import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Home Page</Text>

      <View style={styles.rowGap}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Courses")}
        />
        <Button
          title="Courses Info"
          onPress={() => navigation.navigate("Courses Information")}
        />
        <Button
          title="Counter App"
          onPress={() => navigation.navigate("Counter App")}
        />
        <Button
          title="Random Box"
          onPress={() => navigation.navigate("Random Box")}
        />
        <Button
          title="Color Change"
          onPress={() => navigation.navigate("Color Change")}
        />
        <Button
          title="Password"
          onPress={() => navigation.navigate("Password")}
        />
        <Button
          title="Design Screen"
          onPress={() => navigation.navigate("Desing Screen")}
        />
        <Button
          title="Design Exercise"
          onPress={() => navigation.navigate("Exercise")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowGap: {
    rowGap: 3,
  },
  title: {
    fontSize: 25,
    marginBottom: 3,
    fontStyle: "italic",
    color: "gray",
  },
});
