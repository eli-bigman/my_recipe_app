import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';



const AddRecipeScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleAddImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to pick an image.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.uri);
        }
    };

    // const handleSaveRecipe = async () => {
    //     try {
    //         const db = firebase.firestore();

    //         // Save the input text to Firestore
    //         const recipeRef = await addDoc(collection(db, 'recipes'), {
    //             name: nameValue,
    //             category: categoryValue,
    //             description: descriptionValue,
    //             ingredients: ingredientsValue,
    //         });

    //         console.log('Recipe added with ID: ', recipeRef.id);

    //         // Save the image to Firebase Storage
    //         const response = await fetch(imageUri);
    //         const blob = await response.blob();
    //         const imageName = `recipe_${recipeRef.id}.jpg`; // You can create a unique image name based on the recipe ID
    //         const storageRef = storage.ref().child(imageName);
    //         await storageRef.put(blob);

    //         console.log('Image uploaded successfully!');
    //     } catch (error) {
    //         console.error('Error adding recipe: ', error);
    //     }
    // };


    // const [nameValue, setNameValue] = useState('');
    // const [categoryValue, setCategoryValue] = useState('');
    // const [descriptionValue, setDescriptionValue] = useState('');
    // const [ingredientsValue, setIngredientsValue] = useState('');


    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> Add New Recipe</Text>
            </View>


            <View style={styles.addImageContainer}>
                <TouchableOpacity style={styles.addImageBox} onPress={handleAddImage}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    ) : (
                        <AntDesign name="pluscircleo" size={48} color="#3200BF" />
                    )}
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#A9A9A9"
            // value={nameValue}
            // onChangeText={(text) => setNameValue(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                placeholderTextColor="#A9A9A9"
            // value={categoryValue}
            // onChangeText={(text) => setCategoryValue(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                placeholderTextColor="#A9A9A9"
                multiline
            // value={descriptionValue}
            // onChangeText={(text) => setDescriptionValue(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients"
                placeholderTextColor="#A9A9A9"
                multiline
            // value={ingredientsValue}
            // onChangeText={(text) => setIngredientsValue(text)}
            />
            <TouchableOpacity style={styles.saveButton} >
                {/* <TouchableOpacity style={styles.saveButton} onPress={handleSaveRecipe}> */}

                <Text style={styles.saveButtonText}>Save Recipe</Text>
            </TouchableOpacity>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        justifyContent: "center"
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    addImageContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    addImageBox: {
        width: 120,
        height: 120,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3200BF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 22,
        fontWeight: '600',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3200BF',
        backgroundColor: '#F1F1F1',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 30,
    },
});

export default AddRecipeScreen;

