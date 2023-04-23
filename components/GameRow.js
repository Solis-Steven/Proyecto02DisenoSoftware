import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

const GameRow = ({game, children, changeModalVisible, setGameSelected}) => {

  const handleGameSelected = () => {
    setGameSelected(game["id"]);
    changeModalVisible();
}
  return (
    <Pressable 
    style={{
        flexDirection:"row",
        alignItems:"center"
    }}
    onPress={handleGameSelected}>
    {children}
    <Image 
        source={{
            uri: `${game["background_image"]}`
        }}
        style={{
            width:105,
            height:152,
            margin:10,
            borderRadius:6,
            resizeMode:"cover"
        }}/>
</Pressable>
  )
}

export default GameRow