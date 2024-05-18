import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CoursesSummary from "./CoursesSummary";
import CoursesList from "./CoursesList";

export default function Courses({ coursesPeriod, courses, nullText }) {
  let content = <Text style={styles.alert}>{nullText}</Text>;

  if (courses.length > 0) {
    content = <CoursesList courses={courses} />;
  }

  return (
    <View style={styles.container}>
      <CoursesSummary periodName={coursesPeriod} courses={courses} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  alert: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
  },
});
