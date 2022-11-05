import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dropdown from "./src/common/Dropdown";

const url = "https://run.mocky.io/v3/4df2cb26-9881-4bc9-b2cf-5d15299ac976";

export default function App() {
  const [petData, setPetData] = useState({});

  const getPetData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setPetData(jsonData);
  };

  useEffect(() => {
    getPetData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to pet store</Text>
      <Text style={styles.text}>
        Please select any breed to get information about the pet
      </Text>
      <Dropdown data={petData && petData.pets} />
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
  heading: {
    fontSize: "30px",
    paddingTop: "20%",
    fontWeight: "bold",
  },
  text: {
    paddingTop: "5%",
  },
});
