import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FirstStep from "./components/FirstStep";
import LessonFlatList from "./components/LessonFlatList";
import LessonNavigation from "./components/LessonNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstStep /> */}
      {/* <LessonFlatList /> */}
      <LessonNavigation />
      {/* <Text>sakdf</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
