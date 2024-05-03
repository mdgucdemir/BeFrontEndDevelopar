import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const fliterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <Text style={styles.error}>not found</Text>
          ) : (
            <>
              <ResultsList
                title={"cheap restaurant"}
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
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    margin: 10,
    alignSelf: "center",
  },
});
