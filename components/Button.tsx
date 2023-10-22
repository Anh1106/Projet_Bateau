import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { purchasedProduct } from "../src/Products";

export default function Button(props: any) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    loadSelection();
  }, []);

  const loadSelection = () => {
    const isProductPurchased = purchasedProduct.some((product) => product === props.item);

    if (isProductPurchased) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const toggleSelection = () => {
    const updatedPurchase = !isSelected;
    const updatedQuantity = updatedPurchase ? props.item.quantity + 1 : props.item.quantity - 1;

    if (updatedPurchase) {
      purchasedProduct.push(props.item);
    } else {
      const index = purchasedProduct.findIndex((item) => item === props.item);
      if (index !== -1) {
        purchasedProduct.splice(index, 1);
      }
    }

    setIsSelected(updatedPurchase);
    props.item.purchase = updatedPurchase;
    props.item.quantity = updatedQuantity;
    console.log("Produits sélectionnés : ", purchasedProduct);
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
      {isSelected && <Text> OK </Text>}
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
