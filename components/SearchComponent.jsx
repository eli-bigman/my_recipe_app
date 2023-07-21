import React, { useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchComponent = () => {
  const textInputRef = useRef(null);

  const handleSearchBoxPress = () => {
    // Set focus on the TextInput when the search box is pressed
    textInputRef.current.focus();
  };

  return (
    <View>
      <Text
        style={{
          marginBottom: 52,
          textAlign: 'center',
          fontSize: 22,
        }}
      >
        Search
      </Text>

      <Text
        style={{
          marginBottom: 5,
          textAlign: 'left',
          fontSize: 20,
        }}
      >
        What is in your kitchen?
      </Text>
      <Text
        style={{
          marginBottom: 30,
          textAlign: 'left',
          fontSize: 15,
          color: '#424242',
        }}
      >
        Enter some ingredients
      </Text>

      {/* Wrap the whole search box in TouchableOpacity */}
      <TouchableOpacity
        style={{
          width: 312,
          height: 50,
          backgroundColor: '#F1F1F1',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#3200BF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
        onPress={handleSearchBoxPress} // Set focus on TextInput when the search box is pressed
      >
        <MaterialCommunityIcons name="magnify" color="#000" size={23} />
        <TextInput
          ref={textInputRef} // Create a reference to the TextInput
          placeholder="Type your ingredients"
          style={{ flex: 1, color: '#AEAEAE' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
