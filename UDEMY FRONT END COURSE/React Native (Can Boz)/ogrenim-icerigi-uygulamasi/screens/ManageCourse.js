import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";

export default function ManageCourse({ route, navigation }) {
  const coursesContext = useContext(CoursesContext);
  const courseId = route.params?.courseId;
  let isEditing = false;

  if (courseId) {
    isEditing = true;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Kursu Guncelle" : "Kurs Ekle",
    });
  }, [navigation, isEditing]);

  function deleteCourse() {
    coursesContext.deleteCourse(courseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function addOrUpdateHandler() {
    if (isEditing) {
      coursesContext.updateCourse(courseId, {
        description: "Güncellenen Kurs",
        amount: 169,
        date: new Date(),
      });
    } else {
      coursesContext.addCourse({
        description: "Eklenen Kurs",
        amount: 169,
        date: new Date(),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CourseForm />
      <View style={styles.buttons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.buttonText}>Iptal Et</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.add}>
            <Text style={styles.buttonText}>
              {isEditing ? "Güncelle" : "Ekle"}
            </Text>
          </View>
        </Pressable>
      </View>

      {isEditing && (
        <View style={styles.DeleteContainer}>
          <EvilIcons
            name="trash"
            size={36}
            color="black"
            onPress={deleteCourse}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  DeleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#2196f3",
    paddingTop: 10,
    marginTop: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "#f50057",
    minWidth: 120,
    marginRight: 10,
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
