import React, { useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchComponent = () => {
  const textInputRef = useRef(null);

  const handleSearchBoxPress = () => {
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
        onPress={handleSearchBoxPress}
      >
        <MaterialCommunityIcons name="magnify" color="#000" size={23} />
        <TextInput
          ref={textInputRef}
          placeholder="Type your ingredients"
          style={{ flex: 1, color: '#AEAEAE' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
