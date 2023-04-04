import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HamburgerMenu = ({ onPress, isSidebarOpen }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <MaterialCommunityIcons name="menu" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerMenu;
