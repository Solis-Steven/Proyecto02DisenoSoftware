import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" component={LoginScreen}
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