import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    main: {
      flex: 5,
    },
    buttons: {
      flex: 4,
    },
    button:{
      flexDirection: "row",
    },
    imagebackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    contenu: {
        alignSelf: "center",
        fontSize: 10,
        fontStyle: "italic"
    },
    contenu2: {
      alignSelf: "center",
      fontSize: 10,
      marginTop: 15,
      fontFamily: "italic"
  },

    conteneur: {
        flex: 2
    },
    conteneur2: {
        flex : 1
    },
      footer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      },
  
      bg:{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
      },
      title: {
        flex: 1,
        alignSelf: "center",
        marginTop: 50,
      },
      titleContent: {
          fontStyle: 'italic',
          fontSize: 25,
          color: 'white'
      },  
      mainButton: {
        flexDirection: "row",
      },
      buttons1: {
        flexDirection: "row",
      },
      buttons2: {
        flexDirection: "row",
      },
      contacts: {
          alignSelf: "center",
          fontSize: 15
      },
      image:{
          flex: 5,
          justifyContent: "center",
          alignSelf: "center",
          
      },
      Rcontenu: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
      },
      header2: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: "2%"
      },
      boldText:{
        fontWeight: 'bold'
      },
      legend:{
        flex:1,
        alignContent: "center",
        fontStyle: 'italic',
        alignItems:"center"
      }

      
  });

  export default styles;