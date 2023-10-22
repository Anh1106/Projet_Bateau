import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../services/styles";
import { purchasedProduct } from "../src/Products";
import ProductsPurchased from "../components/ProductsPurchased";

const logo = require("../assets/images/logo/poulpe.png");

const Panier = () => {
  const totalPrix = purchasedProduct.reduce((total, product) => {
    const productPrix = product.price * product.quantity;
    return total + productPrix;
  }, 0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {purchasedProduct.map((product, index) => (
          <ProductsPurchased
            key={index}
            text={product.title}
            image={logo}
            price={product.price}
          />
        ))}

        <div style={styles.colorWhite}>
          <h3 style={styles.textLeft}>Total: {totalPrix} €</h3>
          <h4>Lieu de livraison (choisir):</h4>
          <p>Bistrot des Gascons </p>
          <p>26 Avenue de Tourville, 75007 Paris</p>
          <h4>Date de livraison</h4>
          <p>Samedi 16 Mars, à partir de 9h</p>
        </div>
      </ImageBackground>
    </View>
  );
};

export default Panier;
