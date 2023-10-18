import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/Home';
import DetailScreen from './src/Detail';
import Bateau from './src/Bateau';
import DeLaBrise from './src/bateaux/DeLaBrise';
import Saphir from './src/bateaux/Saphir';
import GastMicher from './src/bateaux/GastMicher';
import Aquilon from './src/bateaux/Aquilon';
import Contact from './src/Contact';
import Products from './src/Products';
import ListPoissons from './src/produits/ListPoissons';
import ListCoquillages from './src/produits/ListCoquillages';
import ListCrustaces from './src/produits/ListCrustaces';
import ListPromotions from './src/produits/ListPromotions';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Bateau" component={Bateau} />
        <Stack.Screen name="DeLaBrise" component={DeLaBrise} />
        <Stack.Screen name="Saphir" component={Saphir} />
        <Stack.Screen name="GastMicher" component={GastMicher} />
        <Stack.Screen name="Aquilon" component={Aquilon} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ListPoissons" component={ListPoissons} />
        <Stack.Screen name="ListCoquillages" component={ListCoquillages} />
        <Stack.Screen name="ListCrustaces" component={ListCrustaces} />
        <Stack.Screen name="ListPromotions" component={ListPromotions} />


        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;