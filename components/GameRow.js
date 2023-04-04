import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

const GameRow = ({games}) => {
  console.log(games);
  return (
    <View>
      {/* <ScrollView horizontal showsVerticalScrollIndicator={false}>
    {
            
      <Pressable>
          <Image
              source={{
                  uri: `${games["background_image"]}`
              }}
              style={{
                  width:105,
                  height:152,
                  margin:10,
                  borderRadius:6,
                  resizeMode:"cover"
              }}/>
      </Pressable>
    }
    </ScrollView> */}
    </View>
  )
}

export default GameRow