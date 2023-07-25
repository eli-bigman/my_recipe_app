import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardList from '../components/CardList';


const FavoriteScreen = () => {
    const [likedRecipes, setLikedRecipes] = useState([]);

    const foodData = [
        {
            id: 1,
            foodImage: require('../assets/Black-forest-Gateau.png'),
            foodName: 'Black forest Gateau',
            category: "Dessert",

        },
        {
            id: 2,
            foodImage: require('../assets/Chorizo-mozzarella-gnocchi-bake.png'),
            foodName: 'Chorizo & mozzarella gnocchi bake',
            category: "Breakfast"

        },
        {
            id: 3,
            foodImage: require('../assets/Huevos-Rancheros.png'),
            foodName: 'Huevos Rancheros',
            category: "Breakfast"
        },
        {
            id: 4,
            foodImage: require('../assets/Coconut-squash-curry.png'),
            foodName: 'Coconut & squash curry',
            category: "Lunch"
        },
        {
            id: 5,
            foodImage: require('../assets/Black-forest-Gateau.png'),
            foodName: 'Black forest Gateau',
            category: "Breakfast"
        },
        {
            id: 6,
            foodImage: require('../assets/Chorizo-mozzarella-gnocchi-bake.png'),
            foodName: 'Chorizo & mozzarella gnocchi bake',
            category: "Breakfast"
        },
        {
            id: 7,
            foodImage: require('../assets/Huevos-Rancheros.png'),
            foodName: 'Huevos Rancheros',
            category: "Drinks"
        },
        {
            id: 8,
            foodImage: require('../assets/Coconut-squash-curry.png'),
            foodName: 'Coconut & Squash curry',
            category: "Launch"
        },
    ]

    const handleLike = (recipe) => {
        // Check if the recipe is already liked
        if (likedRecipes.some((likedRecipe) => likedRecipe.id === recipe.id)) {
            // If liked, remove from likedRecipes
            setLikedRecipes((prevLikedRecipes) =>
                prevLikedRecipes.filter((likedRecipe) => likedRecipe.id !== recipe.id)
            );
        } else {
            // If not liked, add to likedRecipes
            setLikedRecipes((prevLikedRecipes) => [...prevLikedRecipes, recipe]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchComponent />
            </View>

            <View style={styles.cardListContainer}>
                <CardList data={foodData} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    searchContainer: {
        marginTop: 50,
        marginHorizontal: 42,
    },
    cardListContainer: {
        flex: 1,
        marginVertical: 10,
        paddingHorizontal: 0,
    },
});

export default FavoriteScreen
