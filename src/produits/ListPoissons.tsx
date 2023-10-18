import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const poissons = [
  { title: "Filet Bar de ligne ", price: 7 },
  { title: "Bar de ligne portion ", price: 10 },
  { title: "Aile de raie ", price: 10 },
  { title: "Lieu jaune de ligne ", price: 12 },
  { title: "Filet Julienne ", price: 19 },
  { title: "Bar de ligne ", price: 30 },
];

const logo = require("../../assets/images/logo/poulpe.png");
const disabled = true;

const ListPoissons = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {poissons.map((poisson, index) => (
          <Button
            key={index}
            disabled={disabled}
            text={poisson.title}
            image={logo}
            style={styles.button}
            price={poisson.price}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default ListPoissons;
