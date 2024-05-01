import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function BoxScreen() {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button
        title="Add A Box"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              height: 150,
              width: "90%",
              backgroundColor: item,
              marginVertical: 20,
              marginHorizontal: 20,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
