import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";

export default function AllCourse() {
  const coursesContext = useContext(CoursesContext);
  return (
    <Courses
      courses={coursesContext.courses}
      coursesPeriod="Hepsi"
      nullText="Herhangi bir kursa kayitli degilsiniz"
    />
  );
}

const styles = StyleSheet.create({});
