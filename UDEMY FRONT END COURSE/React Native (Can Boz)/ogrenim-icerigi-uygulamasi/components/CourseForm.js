import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./input";

export default function CourseForm() {
  const [inputs, setInputs] = useState({
    amount: "",
    date: "",
    description: "",
  });

  console.log(inputs);

  function inputChange(inputIdentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.priceAndDate}>
        <Input
          style={styles.flexAll}
          label="Tutar"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChange.bind(this, "amount"),
            value: inputs.amount,
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChange.bind(this, "date"),
            value: inputs.date,
          }}
        />
      </View>

      <Input
        label="Baslik"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChange.bind(this, "description"),
          value: inputs.description,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2196f3",
    marginVertical: 20,
  },
  priceAndDate: {
    flexDirection: "row",
  },
  flexAll: {
    flex: 1,
  },
});
