import { Text, Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

const GameColumn = ({game, children, changeModalVisible, setGameSelected, changeModal}) => {

  const handleGameSelected = () => {
    setGameSelected(game["id"]);
    changeModalVisible();
   
}
  return (
    <Pressable 
      style={{
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

      <Text style={{color: "#FFFFFF", maxWidth: 100, textAlign: "center"}}>{game["name"]}</Text>
    </Pressable>
  )
}

export default GameColumn