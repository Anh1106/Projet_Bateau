import { Text, View } from 'react-native';
import React, {useContext} from 'react';
import styles from '../services/styles';
import Json from '../services/contexts';

export default function Info(props){
    const data_contact = useContext(Json).contact;
    return <View style={styles.conteneur}>
    <Text style={styles.contacts}>{data_contact.tel}</Text>
    <Text style={styles.contacts}>{data_contact.mail}</Text>
    <Text style={styles.contacts}>{data_contact.face}</Text>
  </View>
}