import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import CustomComponent from "../screens/CustomComponent";

export default function Dropdown({ data }) {
  const countries = data && data.map((currentValue) => currentValue.breed);
  const [show, setShow] = useState(false);
  const [petData, setPetData] = useState({});

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          const selectedValue =
            data &&
            data.find((currentValue) => currentValue.breed === selectedItem);
          setShow(true);
          setPetData(selectedValue);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      {show && (
        <CustomComponent
          name={petData.name}
          life={petData.life}
          breed={petData.breed}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "20%",
  },
});
