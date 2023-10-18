import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const crustaces = [
  { title: "Araignées", price: 7, purchase: false },
];

const logo = require("../../assets/images/logo/poulpe.png");
const disabled = true;

const ListCrustaces = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imagebackground}
      >
        {crustaces.map((crustace, index) => (
          <Button
            item ={crustace}
            key={index}
            disabled={disabled}
            text={crustace.title}
            image={logo}
            style={styles.button}
            price={crustace.price}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default ListCrustaces;
