import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../services/styles';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Info from '../components/Info'

const MainScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>*/
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imagebackground}>
        <View style={styles.main}>
        <Title title="Le bateau de Thibault"></Title>
          <View style={styles.Rcontenu}>
              <Text style={styles.boldText}>Vente en direct de notre bateau</Text>
              <Text style={styles.boldText}>Produits selon la saison, Livraison sur Paris</Text>
              <Info></Info>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button text="Produits et promotions"
          image={require('../assets/images/logo/poisson.png')}
          screen={"Products"}
          navigation={navigation}> 
          </Button>
          <View style={styles.button}>
            <Button text="Bateaux"
            image={require('../assets/images/logo/ancre.png')}
            screen="Bateau"
            navigation={navigation}>
            </Button>
            <Button text="Restaurants"
            image={require('../assets/images/logo/restaurant.png')}
            screen="Restaurant"
            navigation={navigation}>
            </Button>
          </View>
          <View style={styles.button}>
            <Button text="Recettes"
            image={require('../assets/images/logo/recette.png')}
            screen="Recette"
            navigation={navigation}>
            </Button>
            <Button text="Contact"
            image={require('../assets/images/logo/tourteau.png')}
            screen="Contact"
            navigation={navigation}>
            </Button>
          </View>
        </View>
        <Footer></Footer>
        </ImageBackground>
        </View>
  );
}

export default MainScreen;