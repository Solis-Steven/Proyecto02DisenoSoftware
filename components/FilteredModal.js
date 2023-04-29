import React, { useEffect, useState } from "react";
import {
    Text, View,
    TouchableOpacity, Dimensions,
    ScrollView, Pressable,
    Image,
    FlatList
} from "react-native"
import { Ionicons } from "@expo/vector-icons";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height - 80;
import GameRow from "./GameRow";


const FilteredModal = ({changeModalStatus, selectedGenre, selectedPlatform, setGameSelected, changeModalVisible}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const gamesData = async() => {
        try {
            let url = "";
            if(selectedGenre === "") {
              url = `https://api.rawg.io/api/games?page_size=100&platform=${selectedPlatform}&key=81ebbf2905154d1e9bce047672266b0e`;
            } else {

              url = `https://api.rawg.io/api/games?page_size=100&genres=${selectedGenre}&platform=${selectedPlatform}&key=81ebbf2905154d1e9bce047672266b0e`;
            }
            const response = await fetch(url);
            const data = await response.json();
            num = Math.floor(Math.random() * (data.results.length - 22))
            setGames(data.results.slice(num, num + 20))
            
        } catch(error) {
            console.log("Error en la consulta a la api:", error);
        }
        }
        gamesData();
    }, []);

    const closeModal = () => {
        changeModalStatus()
    }

    return (
        <TouchableOpacity
          disabled={true}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: '100%',
              width: '100%',
              paddingTop: 0,
              backgroundColor: "#1c1c1c",
              borderRadius: 10,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={closeModal}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                paddingTop: 10,
                paddingRight:10,
              }}
            >
              <Ionicons name="arrow-back" size={24} color="red"/>
            </TouchableOpacity>
      
            <View style={{ flex: 1, marginTop: 50 }}>
              {
                games && (
                    <FlatList
                        data={games}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <View style={{ margin: 5 }}>

                              <GameRow game={item} key={item["id"]}
                                setGameSelected={setGameSelected}
                                changeModalVisible={changeModalVisible}
                                />
                            {/* <Image
                                source={{ uri: item["background_image"] }}
                                style={{
                                    width:105,
                                    height:152,
                                    margin:10,
                                    borderRadius:6,
                                    resizeMode:"cover"
                                }}
                              
                            /> */}
                        </View>
                        )}
                        numColumns={Math.floor(WIDTH / 200)} // Ancho de cada columna: 200
                    />
                )
              }
            </View>
          </View>
        </TouchableOpacity>
      );
      

}

export default FilteredModal;