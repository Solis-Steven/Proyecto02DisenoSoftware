import { Text, View, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    }}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
      }}>Welcome to GameFlix!</Text>
      <Text style={{
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 30,
      }}>The best platform to learn and explore the world of video games.</Text>
      <TouchableOpacity style={{
        backgroundColor: '#e50914',
        borderRadius: 5,
        padding: 10,
      }} onPress={() => navigation.navigate("Main")}>

        <Pressable onPress={() => {
          navigation.navigate("Main")
        }}>

          <Text style={{
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
            GET STARTED
          </Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
