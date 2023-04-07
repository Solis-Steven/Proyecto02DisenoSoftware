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

const FilteredModal = ({changeModalVisible, selectedGenre, selectedPlatform}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const gamesData = async() => {
        try {
            const url = `https://api.rawg.io/api/games?page_size=20&genres=${selectedGenre}&platform=${selectedPlatform}&key=81ebbf2905154d1e9bce047672266b0e`;
            const response = await fetch(url);
            const data = await response.json();
            setGames(data.results)
            console.log("Genero", selectedGenre);
            console.log("Plataforma", selectedPlatform);
            
        } catch(error) {
            console.log("Error en la consulta a la api:", error);
        }
        }
        gamesData();
    }, []);

    const closeModal = () => {
        changeModalVisible()
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
              height: HEIGHT,
              width: WIDTH - 80,
              paddingTop: 0,
              backgroundColor: "#EEEEEE",
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
              }}
            >
              <Ionicons name="close" size={32} color="black" />
            </TouchableOpacity>
      
            <View style={{ flex: 1, marginTop: 50 }}>
              {
                games && (
                    <FlatList
                        data={games}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <View style={{ margin: 5 }}>
                            <Image
                                source={{ uri: item["background_image"] }}
                                style={{
                                    width:105,
                                    height:152,
                                    margin:10,
                                    borderRadius:6,
                                    resizeMode:"cover"
                                }}
                            />
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