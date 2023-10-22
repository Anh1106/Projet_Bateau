import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const promotions = [
  { title: "Moules de pêche", price: 7 , purchase: false, quantity: 0},
];

const logo = require("../../assets/images/logo/poulpe.png");
const disabled = true;

const ListPromotions = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {promotions.map((promotion, index) => (
          <Button
            item={promotion}
            key={index}
            disabled={disabled}
            text={promotion.title}
            image={logo}
            style={styles.button}
            price={promotion.price}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default ListPromotions;
