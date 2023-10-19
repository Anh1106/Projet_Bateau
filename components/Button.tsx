import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { purchasedProduct } from "../src/Products";

export default function Button(props: any) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    // Charger l'état de sélection (achat) depuis AsyncStorage au montage du composant
    loadSelection();
  }, []);

  const loadSelection = async () => {
    if (props.item) {
      // Vérifiez d'abord si props.item est défini
      try {
        const storedSelection = await AsyncStorage.getItem(props.item.title);
        if (storedSelection !== null) {
          setIsSelected(storedSelection === "true");
        }
      } catch (error) {
        console.error(
          "Erreur lors du chargement de la sélection depuis AsyncStorage: ",
          error
        );
      }
    }
  };

  const toggleSelection = async () => {
    const updatedPurchase = !isSelected;

    try {
      // Stocker l'état de sélection (achat) dans AsyncStorage
      await AsyncStorage.setItem(props.item.title, updatedPurchase.toString());
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de la sélection dans AsyncStorage: ",
        error
      );
    }

    setIsSelected(updatedPurchase);

    if (updatedPurchase) {
      purchasedProduct.push(props.item);
    } else {
      const index = purchasedProduct.findIndex((item) => item === props.item);
      if (index !== -1) {
        purchasedProduct.splice(index, 1);
      }
    }

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
