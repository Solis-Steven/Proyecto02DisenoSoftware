import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HamburgerMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    navigation.openDrawer();
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={toggleSidebar} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <MaterialCommunityIcons name="menu" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default HamburgerMenu;
