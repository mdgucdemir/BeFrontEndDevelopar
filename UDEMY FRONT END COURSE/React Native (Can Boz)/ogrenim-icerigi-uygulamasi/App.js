import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageCourse from "./screens/ManageCourse";
import RecentCourses from "./screens/RecentCourses";
import AllCourse from "./screens/AllCourse";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CoursesContextProvider from "./store/coursesContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverView() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#42a5f5" },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#ffffff" },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#2196f3",
        headerRight: () => (
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => {
              navigation.navigate("ManageCourse");
            }}
          >
            <View style={styles.iconContainer}>
              <AntDesign name="pluscircle" size={24} color="#fff" />
            </View>
          </Pressable>
        ),
      })}
    >
      <Tab.Screen
        name="RecentCourses"
        component={RecentCourses}
        options={{
          title: "Yakin Zamanda Kayit Olunanlar",
          tabBarLabel: "Yakin Zamanda",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="hourglass-1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllCourses"
        component={AllCourse}
        options={{
          title: "Tum Kurslar",
          tabBarLabel: "Tum Kurslar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CoursesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#42a5f5" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="CourseOverView"
            component={CourseOverView}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageCourse" component={ManageCourse} />
        </Stack.Navigator>
      </NavigationContainer>
    </CoursesContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  iconContainer: {
    marginHorizontal: 12,
  },
});
