import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FirstStep from "./components/FirstStep";
import LessonFlatList from "./components/LessonFlatList";
import LessonNavigation from "./components/LessonNavigation";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import DesingScreen from "./src/screens/DesingScreen";
import DesignExerciseScreen from "./src/screens/DesignExerciseScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen
          name="Courses Information"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Counter App" component={CounterScreen} />
        <Stack.Screen name="Random Box" component={BoxScreen} />
        <Stack.Screen name="Color Change" component={ColorChangeScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Desing Screen" component={DesingScreen} />
        <Stack.Screen name="Exercise" component={DesignExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
