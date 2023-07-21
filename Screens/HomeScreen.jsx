import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import CardList from '../components/CardList';

const HomeScreen = () => {
    const foodData = [
        {
            id: 1,
            foodImage: require('../assets/Black-forest-Gateau.png'),
            foodName: 'Black forest Gateau',
        },
        {
            id: 2,
            foodImage: require('../assets/Chorizo-&-mozzarella-gnocchi-bake.png'),
            foodName: 'Chorizo & mozzarella gnocchi bake',
        },
        {
            id: 3,
            foodImage: require('../assets/Huevos-Rancheros.png'),
            foodName: 'Huevos Rancheros',
        },
        {
            id: 4,
            foodImage: require('../assets/Coconut-squash-curry.png'),
            foodName: 'Coconut & squash curry',
        },
        {
            id: 5,
            foodImage: require('../assets/Black-forest-Gateau.png'),
            foodName: 'Black forest Gateau',
        },
        {
            id: 6,
            foodImage: require('../assets/Chorizo-&-mozzarella-gnocchi-bake.png'),
            foodName: 'Chorizo & mozzarella gnocchi bake',
        },
        {
            id: 7,
            foodImage: require('../assets/Huevos-Rancheros.png'),
            foodName: 'Huevos Rancheros',
        },
        {
            id: 8,
            foodImage: require('../assets/Coconut-squash-curry.png'),
            foodName: 'Coconut & squash curry',
        },

    ];


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
