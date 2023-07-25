import React from 'react'
import { View, Text } from 'react-native'


const RecipeScreen = () => {
    return (
        <View>
            <Text>RecipeScreen</Text>
        </View>
    )
}

export default RecipeScreen




// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const RecipeScreen = ({ route }) => {
//     const { recipe } = route.params;

//     return (
//         <View style={styles.container}>
//             <Image source={recipe.foodImage} style={styles.image} />
//             <View style={styles.contentContainer}>
//                 <Text style={styles.foodName}>{recipe.foodName}</Text>
//                 <Text style={styles.category}>{recipe.category}</Text>
//                 {/* <Text style={styles.sectionTitle}>Ingredients:</Text>
//                 {recipe.ingredients.map((ingredient, index) => (
//                     <Text key={index} style={styles.ingredient}>
//                         {ingredient}
//                     </Text>
//                 ))}
//                 <Text style={styles.sectionTitle}>Steps:</Text>
//                 {recipe.steps.map((step, index) => (
//                     <Text key={index} style={styles.step}>
//                         {step}
//                     </Text>
//                 ))} */}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//     },
//     image: {
//         width: 200,
//         height: 200,
//         borderRadius: 8,
//         marginVertical: 20,
//     },
//     contentContainer: {
//         paddingHorizontal: 20,
//     },
//     foodName: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     category: {
//         fontSize: 16,
//         color: '#888',
//         marginBottom: 16,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     ingredient: {
//         fontSize: 16,
//         marginBottom: 4,
//     },
//     step: {
//         fontSize: 16,
//         marginBottom: 8,
//     },
// });

// export default RecipeScreen;
