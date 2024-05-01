import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Course"
        imageSource={require("../../assets/angular.jpg")}
        desc="Magnificent Angular Course"
      />
      <Information
        title="Bootstrap Course"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Incredible Bootstrap Course"
      />
      <Information
        title="C Course"
        imageSource={require("../../assets/c.png")}
        desc="Super Duper C Course"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
