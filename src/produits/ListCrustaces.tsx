import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const crustaces = [
  { title: "Araignées", price: 7 },
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
        {crustaces.map((poisson, index) => (
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

export default ListCrustaces;
