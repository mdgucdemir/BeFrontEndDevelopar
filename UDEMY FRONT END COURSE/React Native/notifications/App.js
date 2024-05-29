import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import * as Notifications from "expo-notifications";

// Bildirimlerin nasıl görüneceğini belirleyin
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    };
  },
});

export default function App() {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  useEffect(() => {
    // Bildirim izinlerini isteyin
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        setIsPermissionGranted(true);
      } else {
        alert("Notification permissions not granted");
      }
    }

    if (Platform.OS !== "web") {
      requestPermissions();
    }
  }, []);

  const scheduleNotificationHandler = async () => {
    if (!isPermissionGranted) {
      alert("Notifications permissions not granted.");
      return;
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: {
          userName: "Deniz",
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
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
