import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddRecipeScreen from './Screens/AddRecipeScreen';
import HomeScreen from "./Screens/HomeScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import FavoriteScreen from "./Screens/FavoriteScreen"
import RecipeScreen from './Screens/RecipeScreen';




// import { AppLoading } from 'expo';
// import { useFonts } from 'expo-font';



const Tab = createMaterialBottomTabNavigator();


export default function App() {
  //This comment is for importing the fonts but its not working
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  //   'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  //   'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={true}
        barStyle={{ backgroundColor: '#cfbfee', height: 70 }} activeColor="white"
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Categories" component={CategoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }} />

        <Tab.Screen name="Add Recipe" component={AddRecipeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={30} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}