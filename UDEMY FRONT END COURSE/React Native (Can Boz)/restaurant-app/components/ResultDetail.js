import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{result.name}</Text>
        <Text>
          <AntDesign name="star" size={14} color="orange" />{" "}
          <Text style={styles.name}>{result.rating}</Text>
          <Text>({result.review_count})</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
