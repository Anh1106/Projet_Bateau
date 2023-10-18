
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../services/styles";
import Button from "../../components/Button";

const poissons = [
  { title: "Filet Bar de ligne " },
  { title: "Bar de ligne portion " },
  { title: "Aile de raie " },
  { title: "Lieu jaune de ligne " },
  { title: "Filet Julienne " },
  { title: "Bar de ligne " },
];

const logo = require("../../assets/images/logo/poulpe.png");

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
            text={poisson.title}
            image={logo}
            style={styles.button}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default ListPoissons;
