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
import Recette from './src/Recette';
import Homard from './src/recettes/Homard';
import SaintJasques from './src/recettes/SaintJacques';
import Bar from './src/recettes/Bar';
import Tourteau from './src/recettes/Tourteau';
import Restaurant from './src/Restaurant';
import FousDeLIle from './src/restaurants/FousDeIle';
import Gascons from './src/restaurants/Gascons';
import Landais from './src/restaurants/Landais';
import Sommelier from './src/restaurants/Sommelier';
import Villa9Trois from './src/restaurants/Villa9Trois';

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


        <Stack.Screen name="Products" component={Products} />
        
        
        <Stack.Screen name="Recette" component={Recette} />
        <Stack.Screen name="Homard" component={Homard} />
        <Stack.Screen name="SaintJacques" component={SaintJasques} />
        <Stack.Screen name="Bar" component={Bar} />
        <Stack.Screen name="Tourteau" component={Tourteau} />

        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="FousDeLIle" component={FousDeLIle} />
        <Stack.Screen name="Gascons" component={Gascons} />
        <Stack.Screen name="Landais" component={Landais} />
        <Stack.Screen name="Sommelier" component={Sommelier} />
        <Stack.Screen name="Villa9Trois" component={Villa9Trois} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;