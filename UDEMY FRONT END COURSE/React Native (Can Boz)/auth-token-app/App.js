import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1976d2",
        },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Kullanici Giris" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: "Kullanici Kayit",
        }}
      />
    </Stack.Navigator>
  );
}

function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1976d2",
        },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Ana Sayfa",
          headerRight: ({ tintColor }) => (
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={authContext.logout}
            >
              <Ionicons name="exit" size={24} color={tintColor} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack />}
      {authContext.isAuthenticated && <AfterAuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
