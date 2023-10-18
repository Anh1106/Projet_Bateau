import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

export default function Button(props: any) {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelection = () => {
      props.item.purchase = !props.item.purchase;
      setIsSelected(!isSelected);
      console.log(props.item)
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (!props.disabled) {
          props.navigation.navigate(props.screen);
        } else {
          toggleSelection();
        }
      }}
    >
      <Image style={styles.image} source={props.image}></Image>
      <Text style={styles.text}>{props.text} </Text>
      {isSelected && <Text>OK</Text>}
      {props.price && <Text>{props.price}€</Text>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(45, 45, 45, 0.3)",
    flexDirection: "row",
    height: 100,
    padding: "3%",
    borderWidth: 1,
    margin: "1%",
  },
  text: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});
