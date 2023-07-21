import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CategoryCard from '../components/CategoryCard';

const categoryData = [
    {
        id: 1,
        categoryName: 'Breakfast',
        image: require('../assets/cg-breakfast.png'),
    },
    {
        id: 2,
        categoryName: 'Lunch',
        image: require('../assets/cg-lunch.png'),
    },
    {
        id: 3,
        categoryName: 'Pastas',
        image: require('../assets/cg-pastas.png'),
    },
    {
        id: 4,
        categoryName: 'Drinks',
        image: require('../assets/cg-drinks.png'),
    },
    {
        id: 5,
        categoryName: 'Soups',
        image: require('../assets/cg-soups.png'),
    },
    {
        id: 6,
        categoryName: 'Salads',
        image: require('../assets/cg-salads.png'),
    },
    {
        id: 7,
        categoryName: 'Desserts',
        image: require('../assets/cg-desserts.png'),
    },
];

const CategoryScreen = () => {
    const renderItem = ({ item }) => (
        <CategoryCard Name={item.categoryName} image={item.image} />
    );

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                paddingTop: 100,
                marginBottom: 10
            }}>
                Categories
            </Text>
            <View style={{
                flex: 1,
                margin: 8
            }}>
                <FlatList
                    data={categoryData}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
                />
            </View>
        </View>

    );

};



export default CategoryScreen;
