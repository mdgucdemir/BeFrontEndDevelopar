import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + action.payload };
    case "decreament":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={{ rowGap: 3 }}>
      <Button
        title="Increase"
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({ type: "increament", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: "decreament", payload: 1 });
        }}
      />
      <Text>Count: {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
