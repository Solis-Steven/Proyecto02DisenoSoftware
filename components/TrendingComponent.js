import { Pressable, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'
import GameRow from './GameRow'

const TrendingComponent = ({games, num, setGameSelected, changeModalVisible} ) => {


    

    
      
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
            
           <GameRow
           game={game}
           key={game["id"]}
           setGameSelected={setGameSelected}
           changeModalVisible={changeModalVisible}>
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
           </GameRow>
        ))
    }
    </ScrollView>

    </View>
  )
}

export default TrendingComponent