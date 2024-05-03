import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  //   console.log(results);

  const fliterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="cheap restaurant"
        results={fliterResultsByPrice("₺")}
      />
      <ResultsList
        title="normal restaurant"
        results={fliterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="expensive restaurant"
        results={fliterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
