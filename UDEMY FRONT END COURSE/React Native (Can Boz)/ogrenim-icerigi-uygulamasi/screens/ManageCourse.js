import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";

export default function ManageCourse({ route, navigation }) {
  const coursesContext = useContext(CoursesContext);
  const courseId = route.params?.courseId;
  let isEditing = false;

  const selectedCourse = coursesContext.courses.find(
    (course) => course.id === courseId
  );
  // console.log(selectedCourse);

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

  function addOrUpdateHandler(courseData) {
    if (isEditing) {
      coursesContext.updateCourse(courseId, courseData);
    } else {
      coursesContext.addCourse(courseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CourseForm
        cancelHandler={cancelHandler}
        onSubmit={addOrUpdateHandler}
        buttonLabel={isEditing ? "Güncelle" : "Ekle"}
        defaultValues={selectedCourse}
      />

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
});
