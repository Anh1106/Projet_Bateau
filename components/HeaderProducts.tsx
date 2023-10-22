import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../services/styles";
const HeaderProducts : React.FC<{ navigation: any }> = ({ navigation }) => {
    return (

        <View style={style.head}>
            <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("Main")}>
                        <Image source={require("../assets/images/homeLogo.png")} style={styles.logoL}></Image>
                    </TouchableOpacity>
            <Image style={style.img} source={require("../assets/images/iTunesArtwork.png")}></Image>
            <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("Panier")}>
                    <Image source={require("../assets/images/cartLogo.png")} style={styles.logoR}></Image>
            </TouchableOpacity>
        </View>

        
    )
}

const style = StyleSheet.create({
    head:{
        position: "relative",
        height: 70,
        top: 0,
        backgroundColor: "black",
        flexDirection: "row",
    },
    img:{
        marginLeft : 15
    }
});


export default HeaderProducts;