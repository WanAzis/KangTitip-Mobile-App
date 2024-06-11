import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

type Country = {
  id: string;
  name: string;
  flag: string;
};

type CountryProps = {
  country: Country;
  isActive: boolean;
  onSelectCountry: (countryName: string) => void;
};

const Flag: React.FC<CountryProps> = ({ country, isActive, onSelectCountry }) => {
  const handleFlagPicker = () => {
    onSelectCountry(country.name);
  };

  return (
    <TouchableOpacity
      style={[
        styles.flagContainer,
        isActive ? styles.activeFlag : {},
      ]}
      onPress={handleFlagPicker}
    >
      <Image
        source={{ uri: country.flag }}
        style={styles.flagImage}
      />
      <Text
        style={[
          styles.flagText,
          isActive ? styles.activeText : {},
        ]}
      >
        {country.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
  },
  activeFlag: {
    backgroundColor: '#3A76BD',
  },
  flagImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  flagText: {
    fontSize: 11,
    textAlign: 'center',
    marginLeft: 5,
  },
  activeText: {
    color: 'white',
  },
});

export default Flag;
