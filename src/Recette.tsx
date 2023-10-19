import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Image,
  } from "react-native";
  import React from "react";
  import Button from "../components/Button";
  import Footer from "../components/Footer";
  import Title from "../components/Title";
  import Info from "../components/Info";
  import styles from "../services/styles";
  
  const Recette: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.imagebackground}
        >
          <View style={styles.main}>
            <Title title="Nos Recettes"></Title>
            <View style={styles.Rcontenu}>
              <Text style={styles.boldText}>
                Toutes les recettes du bateau de Thibault.
              </Text>
              <Info></Info>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttons1}>
              <Button
                text="Homard"
                image={require("../assets/images/homardRecette.png")}
                screen={"Homard"}
                navigation={navigation}
                style={styles.button}
              ></Button>
              <Button
                text="St Jacques"
                image={require("../assets/images/saintJacques.png")}
                screen={"SaintJacques"}
                navigation={navigation}
                style={styles.button}
              ></Button>
            </View>
            <View style={styles.buttons1}>
              <Button
                text="Bar"
                image={require("../assets/images/barRecette.png")}
                screen={"Bar"}
                navigation={navigation}
                style={styles.button}
              ></Button>
              <Button
                text="Tourteau"
                image={require("../assets/images/logo/tourteau.png")}
                screen={"Tourteau"}
                navigation={navigation}
                style={styles.button}
              ></Button>
            </View>
            <View style={styles.buttons2}>
              <Button
                text="Recette"
                image={require("../assets/images/logo/tourteau.png")}
                screen={"Tourteau"}
                navigation={navigation}
                style={styles.button}
              ></Button>
              <Button
                text="Recette"
                image={require("../assets/images/logo/tourteau.png")}
                screen={"Tourteau"}
                navigation={navigation}
                style={styles.button}
              ></Button>
            </View>
            <Footer></Footer>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Recette;
  