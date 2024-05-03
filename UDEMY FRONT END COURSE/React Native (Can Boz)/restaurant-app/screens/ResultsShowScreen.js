import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const id = route.params.id;

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
    // baslangicta result gelmiyor belli bir sn sonra geliyor
    // o yuzden bu kosulu attik
  }

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
