import { Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import GameRow from './GameRow';

const CrisVelasco = ({setGameSelected, changeModalVisible}) => {
    const [games, setGames] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        // actualiza el valor de "num" cada vez que el componente se renderiza
            setNum(Math.floor(Math.random() * (games.length - 11)));
    }, [games]);

    useEffect(() => {
        const gamesData = async() => {
          try {
            const url = "https://api.rawg.io/api/games?page_size=40&key=81ebbf2905154d1e9bce047672266b0e&creators=cris-velasco";
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
            marginTop: 30,
            marginBottom: 50
        }}>
    
        <Text style={{
                color: '#FFF',
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 10
            }}>
                Cris Velasco
            </Text>
            
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {
            games.slice(num, num + 10).map( game => (
                
                <GameRow game={game} key={game["id"]}
                changeModalVisible={changeModalVisible}
                setGameSelected={setGameSelected}/>
            ))
        }
        </ScrollView>

    </View>
  )
}

export default CrisVelasco