import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const CardComponent = ({ foodImage, foodName }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    };

    return (
        <View
            style={{
                width: 146,
                height: 183,
                borderRadius: 10,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Image
                source={foodImage}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                }}
            />
            {/* Like Component */}
            <View
                style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 23,
                    height: 27,
                    borderRadius: 7,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                }}
            >
                <TouchableOpacity onPress={handleLikePress}>
                    <MaterialCommunityIcons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        color={isLiked ? 'red' : 'black'}
                        size={20}
                    />
                </TouchableOpacity>
            </View>

            {/* Text */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 8,
                    width: 132,
                }}
            >
                <Text
                    style={{
                        color: '#FFF',
                        textShadowColor: 'rgba(0, 0, 0, 0.25)',
                        textShadowOffset: { width: 0, height: 4 },
                        textShadowRadius: 10,
                        fontSize: 15,
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 20,
                    }}
                >
                    {foodName}
                </Text>
            </View>
        </View>
    );
};

export default CardComponent;
