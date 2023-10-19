import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Image,
  } from "react-native";
  import React from "react";
  import Btn_Resto from "../components/Btn_Resto";
  import Footer from "../components/Footer";
  import Title from "../components/Title";
  import Info from "../components/Info";
  import styles from "../services/styles";
  
  const Restaurant: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.imagebackground}
        >
          <View style={styles.main}>
            <Title title="Restaurants partenaires"></Title>
            <View style={styles.Rcontenu}>
              <Text style={styles.boldText}>
                Tous les restaurants partenaires avec le bateau de Thibault.
              </Text>
              <Info></Info>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttons1}>
              <Btn_Resto
                text="Bistrot des Gascons"
                //image={require("../assets/images/deLaBrise.png")}
                screen={"Gascons"}
                navigation={navigation}
                style={stylePage.btn_Text}
              ></Btn_Resto>
              <Btn_Resto
                text="Les fous de l'île"
                //image={require("../assets/images/fousDeLIle.png")}
                screen={"FousDeLIle"}
                navigation={navigation}
                style={styles.button}
              ></Btn_Resto>
            </View>
            <View style={styles.buttons1}>
              <Btn_Resto
                text="Bistrot Landais"
                //image={require("../assets/images/bistrotLandais.png")}
                screen={"Landais"}
                navigation={navigation}
                style={styles.button}
              ></Btn_Resto>
              <Btn_Resto
                text="Villa 9-Trois"
                //image={require("../assets/images/villa9Trois.png")}
                screen={"Villa9Trois"}
                navigation={navigation}
                style={styles.button}
              ></Btn_Resto>
            </View>
            <View style={styles.buttons2}>
              <Btn_Resto
                text="Bistrot du Sommelier"
                //image={require("../assets/images/duSommelier.png")}
                screen={"Sommelier"}
                navigation={navigation}
                style={styles.button}
              ></Btn_Resto>
              <Btn_Resto
                text="Devenez partenaire!"
                //image={require("../assets/images/logo/ancre.png")}
                screen={"Contact"}
                navigation={navigation}
                style={styles.button}
              ></Btn_Resto>
            </View>
            <Footer></Footer>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const stylePage = StyleSheet.create({
    btn_Text:{
        fontSize: 7
    }
  })
  
  export default Restaurant;