import { TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HamburgerMenu = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <MaterialCommunityIcons name="menu" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default HamburgerMenu;
