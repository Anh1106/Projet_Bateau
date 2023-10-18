import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";

const Header : React.FC = (props) => {
    return (
        <View style={styles.head}>
            <Image source={require("../assets/images/iTunesArtwork.png")}></Image>
        </View>

        /*<View>
        <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("home")}>
                        <Image source={require("../assets/icons/homeLogo.png")} ></Image>
                    </TouchableOpacity>
                        <ImageBackground source={require(require("../assets/images/iTunesArtwork.png"))}>
                            
                        </ImageBackground>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("store")}>
                    <Image source={require("../assets/icons/cartLogo.png")}></Image>
                    </TouchableOpacity>
                </View>
                </View>*/
    )
}

const styles = StyleSheet.create({
    head:{
        alignContent: "center",
        backgroundColor: "black",
        alignItems: "center"

    }
});


export default Header;