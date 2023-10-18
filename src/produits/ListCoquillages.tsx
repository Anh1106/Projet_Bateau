import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const coquillages = [
  { title: "Moules de pêche", price: 7, purchase: false },
  { title: "Bouquets cuits", price: 8, purchase: false },
  { title: "Huitres N°2 St Vaast", price: 9.5, purchase: false },
  { title: "Huitres N°3 OR St Vaast", price: 12, purchase: false },
  { title: "Huitres N°4 St Vaast", price: 19, purchase: false },
  { title: "Huitres N°5 St Vaast", price: 24, purchase: false },
  { title: "Huitres N°6 St Vaast", price: 38 , purchase: false},
  { title: "Huitres N°7 St Vaast", price: 48 , purchase: false},
];

const logo = require("../../assets/images/logo/poulpe.png");
const disabled = true;

const ListCoquillages = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {coquillages.map((coquillage, index) => (
          <Button
            item = {coquillage}
            key={index}
            disabled={disabled}
            text={coquillage.title}
            image={logo}
            style={styles.button}
            price={coquillage.price}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default ListCoquillages;
