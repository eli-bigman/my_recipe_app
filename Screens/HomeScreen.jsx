import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import CardList from '../components/CardList';

import { firebase, db, storage } from '../firebase.config';

const HomeScreen = () => {
    const foodData = [
        {
            id: 1,
            foodImage: require('../assets/Black-forest-Gateau.png'),
            foodName: 'Black forest Gateau',
            category: "Dessert"
        },
        {
            id: 2,
            foodImage: require('../assets/Chorizo-mozzarella-gnocchi-bake.png'),
            foodName: 'Chorizo & mozzarella gnocchi bake',
            category: "Breakfast"
        },


    ];


    const uploadImagesToFirebaseStorage = async (foodData) => {
        try {
            const uploadPromises = foodData.map(async (item) => {
                const response = await fetch(item.foodImage);
                const blob = await response.blob();
                const fileName = `food_${item.id}.png`; // You can adjust the file naming based on your preference

                const ref = storage.ref().child(fileName);
                await ref.put(blob);

                const url = await ref.getDownloadURL();
                return { ...item, foodImage: url };
            });

            return Promise.all(uploadPromises);
        } catch (error) {
            console.error('Error uploading images to Firebase Storage:', error);
            return foodData;
        }
    };

    // Call the function to upload the images when the component mounts
    useEffect(() => {
        (async () => {
            const updatedFoodData = await uploadImagesToFirebaseStorage(foodData);
            // Use the updatedFoodData for the CardList
        })();
    }, []);

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

export default HomeScreen;
