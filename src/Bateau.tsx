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

const Bateau: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imagebackground}
      >
        <View style={styles.main}>
          <Title title="Bateaux"></Title>
          <View style={styles.Rcontenu}>
            <Text style={styles.boldText}>
              Toutes les eaux mènent à Thibault.
            </Text>
            <Info></Info>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttons1}>
            <Button
              text="De La Brise"
              image={require("../assets/images/deLaBrise.png")}
              screen={"DeLaBrise"}
              navigation={navigation}
              style={styles.button}
            ></Button>
            <Button
              text="Saphir"
              image={require("../assets/images/saphir.png")}
              screen={"Saphir"}
              navigation={navigation}
              style={styles.button}
            ></Button>
          </View>
          <View style={styles.buttons1}>
            <Button
              text="Gast Micher"
              image={require("../assets/images/gastMicher.png")}
              screen={"GastMicher"}
              navigation={navigation}
              style={styles.button}
            ></Button>
            <Button
              text="Aquilon"
              image={require("../assets/images/aquilon.png")}
              screen={"Aquilon"}
              navigation={navigation}
              style={styles.button}
            ></Button>
          </View>
          <View style={styles.buttons2}>
            <Button
              text="Contact"
              image={require("../assets/images/logo/ancre.png")}
              screen={"Contact"}
              navigation={navigation}
              style={styles.button}
            ></Button>
            <Button
              text="Contact"
              image={require("../assets/images/logo/ancre.png")}
              screen={"Contact"}
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

export default Bateau;
