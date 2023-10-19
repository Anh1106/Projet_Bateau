import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../services/styles";
import Button from "../components/Button";
import { purchasedProduct } from "../src/Products";

const logo = require("../assets/images/logo/poulpe.png");
const disabled = true;

const Panier = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {purchasedProduct.map((product, index) => (
          <Button
            // item={poisson}
            key={index}
            disabled={disabled}
            text={product.title}
            image={logo}
            price={product.price}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default Panier;
