import { StyleSheet, View, Button } from "react-native";
import React, { useReducer } from "react";
import ColorChange from "../../components/ColorChange";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeRed":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "changeGreen":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "changeBlue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

export default function ColorChangeScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorChange
        color="red"
        onIncrease={() => dispatch({ type: "changeRed", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeRed", payload: -20 })}
      />
      <ColorChange
        color="green"
        onIncrease={() => dispatch({ type: "changeGreen", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeGreen", payload: -20 })}
      />
      <ColorChange
        color="blue"
        onIncrease={() => dispatch({ type: "changeBlue", payload: 20 })}
        onDecrease={() => dispatch({ type: "changeBlue", payload: -20 })}
      />

      <View
        style={{
          height: 150,
          width: "90%",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      />
      {/* <Button title="Add A Box" onPress={() => {}} /> */}
      {/* <View
        style={{
          height: 150,
          width: "90%",
          backgroundColor: "red",
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
