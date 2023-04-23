import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";


const Drawer = createDrawerNavigator();

function DrawerMain() {
  return (
    <Drawer.Navigator
      gestureEnabled={false}
     screenOptions={{headerShown:false}} 
     drawerContent={(props) => <DrawerContent {...props}/>}>
        
      <Drawer.Screen
        name="MainDrawer" component={MainScreen}    
      />
      <Drawer.Screen
        name="Sign Out"
        component={LoginScreen}     
      />
    </Drawer.Navigator>
  );
}

export default DrawerMain;
