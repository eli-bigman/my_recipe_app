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
        // Add more food items here with unique IDs
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
        marginTop: 226,
        marginHorizontal: 42,
    },
    cardListContainer: {
        flex: 1,
        marginVertical: 10,
        paddingHorizontal: 20,
    },
});

export default HomeScreen;
