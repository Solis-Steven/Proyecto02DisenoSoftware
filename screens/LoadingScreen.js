import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {

    return (
    <View style={{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <View>
            <Text>Loading</Text>
            <ActivityIndicator size="large" color="red" />
        </View>
    </View>
  )
}

export default LoadingScreen