import { Text, View, StatusBar, ImageBackground, Image, StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import styles from '../services/styles';
import data from '../services/contexts';

const Contact: React.FC = (props) => {
    const data_contact = useContext(data).contact;
    const des1 = data_contact.description;
    const des2 = data_contact.description2;
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/images/background.png")} style={styles.bg}>
                <View style={styles.main}>
                    <Title title={data_contact.Title}></Title>
                    <View style={styles.image}>
                      <Image
                      source={data_contact.img}
                      />
                    </View>
                    <View style={styles.contenu}>
                        {des1.map((item, index) => (<Text style={styles.contenu}key={index}>{item}</Text>))}
                    </View>    
                    <View style={styles.contenu2}>
                        {des2.map((item, index) => (<Text style={styles.contenu}key={index}>{item}</Text>))}
                    </View>  
                </View>
                <Footer></Footer>

                
                </ImageBackground>
            </View>
    )
}

export default Contact;
