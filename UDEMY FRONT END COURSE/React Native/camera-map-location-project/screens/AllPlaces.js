import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceList from "../components/Places/PlaceList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlaceList places={loadedPlaces} />;
}

const styles = StyleSheet.create({});
