import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddRecipeScreen from './Screens/AddRecipeScreen';
import HomeScreen from "./Screens/HomeScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import FavoriteScreen from "./Screens/FavoriteScreen"


// import { AppLoading } from 'expo';
// import { useFonts } from 'expo-font';



const Tab = createMaterialBottomTabNavigator();


export default function App() {

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
        labeled={false}
        barStyle={{ backgroundColor: '#cfbfee', height: 70 }} activeColor="white"
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Search" component={CategoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Notification" component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color="#231F20" size={26} />
            ),
          }} />
        <Tab.Screen name="Profile" component={AddRecipeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color="#231F20" size={25} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}