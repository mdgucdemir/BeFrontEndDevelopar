import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";
import {
  deleteCourseHttp,
  storeCourse,
  updateCourseHttp,
} from "../helper/http";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorText from "../components/ErrorText";

export default function ManageCourse({ route, navigation }) {
  const coursesContext = useContext(CoursesContext);
  const courseId = route.params?.courseId;
  let isEditing = false;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

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

  async function deleteCourse() {
    setIsSubmitting(true);
    setError(null);
    try {
      coursesContext.deleteCourse(courseId);
      await deleteCourseHttp(courseId);
      navigation.goBack();
    } catch (error) {
      setError("Kurslari silemedik");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorText message={error} />;
  }

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function addOrUpdateHandler(courseData) {
    setIsSubmitting(true);
    setError(null);

    try {
      if (isEditing) {
        coursesContext.updateCourse(courseId, courseData);
        await updateCourseHttp(courseId, courseData);
      } else {
        const id = await storeCourse(courseData);
        coursesContext.addCourse({ ...courseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Kurs eklemede veya guncellemede problem var");
      setIsSubmitting(false);
    }
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
