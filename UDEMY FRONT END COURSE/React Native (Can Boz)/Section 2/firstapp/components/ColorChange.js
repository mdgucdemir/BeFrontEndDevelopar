import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ColorChange({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: 10,
          marginBottom: 3,
          color: color,
          fontSize: 20,
          fontWeight: 400,
        }}
      >
        {color}
      </Text>
      <View style={styles.gap}>
        <Button title={`${color} increament`} onPress={() => onIncrease()} />
        <Button title={`${color} decreament`} onPress={() => onDecrease()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gap: { gap: 5 },
});
