/*import { StyleSheet, Text, View, StatusBar,TouchableOpacity,TouchableHighlight, ImageBackground, Image, Modal, Alert } from 'react-native';
import React from 'react';
import HeadStore from '../components/HeaderProducts'
//import ProductCart from '../component/ProductCart'
import styles from '../services/styles'
import { useNavigation, ParamListBase } from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";



class Store extends React.Component {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  render(){
    const { modalVisible } = this.state;
    return(<View style={styles.container}>
      <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>
      <HeadStore navigation={navigation}></HeadStore>

      <View style={styles.header2}>
                    <Text > Modifiez la quantité en tapant sur chaque produit</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choisissez votre quantité :</Text>

            <TouchableOpacity>
            <Text>
            Bistrot des Gascons
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Les fous de l'île
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Bistrot landais
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Villa 9-trois
            </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>
            Bistrot du Sommelier
            </Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <Text style={{textAlign: "center"}}> Choisissez vos produits</Text>

        <View style={{flex:1}}>
          {this.props.products.map((value,index)=>{
            return <ProductCart key={index} item={value}/>
          })}
        </View>

        <TouchableOpacity onPress={() => {
                          this.setModalVisible(!modalVisible);
                        }}>
        <Text> VALIDER </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    )
}

}

const mapStateToProps = state => {
  return {
      products: state.cart.products
  }
};

export default connect(mapStateToProps)(Store);
*/

import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import HeaderProducts from '../components/HeaderProducts';
import styles from '../services/styles';

type RootStackParamList = {
  Main: undefined;
  Detail: undefined;
  // Ajoutez d'autres écrans ici
};

type Props = StackScreenProps<RootStackParamList, 'Main'>;

class Panier extends React.Component<Props> {
  render() {
    return (
      /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Panier Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>*/
    <View style={styles.container}>
        <ImageBackground source={require("../assets/images/background.png")} style={styles.imagebackground}>
            <HeaderProducts navigation={this.props.navigation}></HeaderProducts>
            <View style={styles.header2}>
                <Text > Modifiez la quantité en tapant sur chaque produit</Text>
            </View>
        </ImageBackground>
    </View>
    );
  }
}

export default Panier;