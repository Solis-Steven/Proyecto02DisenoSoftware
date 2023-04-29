import { Text, View, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import GameRow from './GameRow'

const TrendingComponent = ({setGameSelected, changeModalVisible} ) => {
  const [games, setGames] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    // actualiza el valor de "num" cada vez que el componente se renderiza
    setNum(Math.floor(Math.random() * (games.length - 11)));
  }, [games]);

  useEffect(() => {
    const gamesData = async() => {
      try {
        const url = "https://api.rawg.io/api/games?page_size=200&key=81ebbf2905154d1e9bce047672266b0e";
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results)
        
      } catch(error) {
        console.log("Error en la consulta a la api:", error);
      }
    }
      gamesData();
  }, []);
      
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
                    right:70,
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