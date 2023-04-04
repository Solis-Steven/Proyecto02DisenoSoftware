import { Pressable, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const CrisVelasco = () => {
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
                
                <Pressable 
                    key={game["id"]}
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
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

export default CrisVelasco