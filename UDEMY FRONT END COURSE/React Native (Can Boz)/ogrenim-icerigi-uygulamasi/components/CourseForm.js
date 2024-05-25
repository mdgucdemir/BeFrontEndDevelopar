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
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function addOrUpdateHandler() {
    const courseData = {
      amount: Number(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value.trim(),
    };

    // console.log(courseData);

    const amountIsValid = courseData.amount > 0;
    const dateIsValid = courseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = courseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: {
            value: Number(currentInputs.amount.value),
            isValid: amountIsValid,
          },
          date: {
            value: currentInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return; // herhangi bir hata var ise burada durur ve altta ki onSubmit islemi gerceklesmes
    }

    onSubmit(courseData);
  }

  // console.log(inputs);

  function inputChange(inputIdentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: { value: enteredValue, isValid: true },
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
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChange.bind(this, "amount"),
            value: inputs.amount.value.toString(),
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChange.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        label="Baslik"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChange.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      <View style={styles.error}>
        {!inputs.amount.isValid && (
          <Text style={styles.errorText}>
            Lutfen tutari dogru formatta giriniz
          </Text>
        )}
        {!inputs.date.isValid && (
          <Text style={styles.errorText}>
            Lutfen tarihi dogru formatta giriniz
          </Text>
        )}
        {!inputs.description.isValid && (
          <Text style={styles.errorText}>
            Lutfen basligi dogru formatta giriniz
          </Text>
        )}
      </View>
      <View style={styles.buttons}>
        <Pressable android_ripple={{ color: "dddddd" }} onPress={cancelHandler}>
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
  error: {
    alignItems: "center",
    marginTop: 5,
  },
  errorText: {
    color: "#e91e63",
  },
});
