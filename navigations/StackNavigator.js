import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" component={HomeScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
                options={{headerShown:false}} />  
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{headerShown:false}} />    
            <Stack.Screen 
                name="Main"
                component={DrawerNavigator}
                options={{headerShown:false}} /> 
            
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})