import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardComponent from './CardComponent';


const CardList = ({ data }) => {
    const renderItem = ({ item }) => (

        <CardComponent foodImage={item.foodImage} foodName={item.foodName} />


    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CardList;
