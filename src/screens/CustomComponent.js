import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomComponent({ name, breed, life }) {
  return (
    <View style={styles.container}>
      <Text><Text style={styles.text}>Name:</Text> {name}</Text>
      <Text><Text style={styles.text}>Breed:</Text> {breed}</Text>
      <Text><Text style={styles.text}>Life:</Text> {life}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "90%",
    padding: "5%",
    marginTop: "45%",
    borderWidth: 2,
    borderRadius: "10%",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontWeight: 'bold'
  }
});
