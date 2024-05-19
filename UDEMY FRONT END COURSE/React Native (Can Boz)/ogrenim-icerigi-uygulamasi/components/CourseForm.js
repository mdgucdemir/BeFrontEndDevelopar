import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./input";
import { getFormatedDate } from "../helper/date";

export default function CourseForm({
  cancelHandler,
  onSubmit,
  buttonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormatedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function addOrUpdateHandler() {
    const courseData = {
      amount: Number(inputs.amount),
      date: new Date(inputs.date),
      description: inputs.description,
    };

    const amountIsValid = !isNaN(courseData.amount) && courseData.amount > 0;
    const dateIsValid = courseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = courseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert(
        "Hatali Giris",
        "Lutfen tum alanlari dogru format ta giriniz"
      );
      return; // herhangi bir hata var ise burada durur ve altta ki onSubmit islemi gerceklesmes
    }

    onSubmit(courseData);
  }

  // console.log(inputs);

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
            maxLength: 14,
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
      <View style={styles.buttons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.buttonText}>Iptal Et</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.add}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </View>
        </Pressable>
      </View>
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
  buttons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "#f50057",
    minWidth: 120,
    marginRight: 30,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  add: {
    backgroundColor: "#1565c0",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
});
