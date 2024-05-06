import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="EKle" onPress={addBlogPost} />
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(m) => m.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
