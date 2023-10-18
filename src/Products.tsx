import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Footer from '../components/Footer';

import styles from '../services/styles';
import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import Header from '../components/Header';

export default class Products extends React.Component {

    state = {
        data: []
    }

    render(){
      return(     
          <View style={styles.container}>
             <ImageBackground source={require("../assets/images/background.png")} style={styles.imagebackground}>
            <Header></Header>
            <View style={styles.header2}>
                    <Text> Choisissez vos produits</Text>
            </View>
               <View style={{flex:4}}>
                  <Button text="Poissons"
                  image={require("../assets/images/logo/poulpe.png")}></Button>
                  <Button text="Coquillages"
                  image={require("../assets/images/logo/poulpe.png")}></Button>
                  <Button text="Crustacés"
                  image={require("../assets/images/logo/poulpe.png")}></Button>
                  <Button text="Promotion"
                  image={require("../assets/images/logo/poulpe.png")}></Button>
              </View>
              <Footer></Footer>
              </ImageBackground>
              
          </View>
          
      )
  }
}