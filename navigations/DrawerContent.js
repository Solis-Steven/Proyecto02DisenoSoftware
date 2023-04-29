import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    // Navegar a la pantalla de "Login"
    navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView
      {...props}
      //color de fondo del Drawer
      style={{ backgroundColor: "black" }}
    >
      <DrawerItem
        label="Sign Out"
        onPress={handleSignOut}
        icon={({ color, size }) => (
          // Renderizar el icono junto al texto del elemento "Sign Out"
          <View style={styles.iconContainer}>
            <Icon name="logout" size={size} color="red" />
          </View>
        )}
        labelStyle={styles.labelStyle}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        color: 'red', 
        fontSize: 18, 
        flex: 1 
    }
});

export default DrawerContent;