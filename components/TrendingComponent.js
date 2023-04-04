import { Pressable, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const TrendingComponent = ({games, num}) => {
  return (
    <View
        style={{
            marginTop:30
        }}>
    
    <Text style={{
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10
          }}>
            Trends
          </Text>

    <ScrollView horizontal showsVerticalScrollIndicator={false}>
    {
        games.slice(num, num + 10).map((game, index) => (
            
            <Pressable 
                key={game["id"]}
                style={{
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                <Text style={{
                    fontSize:85,
                    color:"white",
                    fontWeight:"bold",
                    position:"absolute",
                    zIndex:5,
                    top:40,
                    right:90,
                    marginTop:20
                }}>
                    {index + 1}
                </Text>

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
        ))
    }
    </ScrollView>

    </View>
  )
}

export default TrendingComponent