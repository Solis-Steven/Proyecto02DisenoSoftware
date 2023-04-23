import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height - 80;

const GameModal = ({ changeModalVisible, game }) => {
  const [gameInfo, setGameInfo] = useState({});
  const [genres, setGenres] = useState([]);

  const closeModal = () => {
    changeModalVisible();
  };

  useEffect(() => {
    const gameData = async () => {
      try {
        const url = `https://api.rawg.io/api/games/${game}?key=81ebbf2905154d1e9bce047672266b0e`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setGameInfo(data);
        setGenres(data.genres);
      } catch (error) {
        console.log("Error en la consulta a la api GAME MODAL:", error);
      }
    };
    gameData();
  }, [])

  return (
    <TouchableOpacity disabled={true} style={styles.modalFormat}>
      <View
        style={{
          height: HEIGHT,
          width: WIDTH - 80,
          paddingTop: 0,
          backgroundColor: "black",
          borderRadius: 10,
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 10, right: 10 }}
          onPress={closeModal}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>

        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Image
            source={{ uri: `${gameInfo["background_image"]}` }}
            style={styles.gameImage}
          />
        </View>
        <View style={{height:200}}>
          <Text style={styles.title}>{gameInfo.name}</Text>
          <ScrollView>
          <Text style={styles.description}>{gameInfo.description_raw}</Text>
          </ScrollView>
        </View>

        <View style={styles.gameGenres}>
        {
          genres.map( genre=>(
            <View style={styles.genreContainer}

              key={genre["id"]}>
                <Text style={{color: "white"}}>
                {genre["name"]}
                </Text>
            </View>
          ))
          
        }
        </View>

        <View style={{ marginTop: 16, alignItems: "center" }}>
          <Image
            source={{ uri: `${gameInfo["background_image_additional"]}` }}
            style={styles.gameImage}
          />
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  description: {
    fontSize: 13,
    color: "white",
    textAlign: "left",
    paddingLeft: 20,
    paddingRight: 20,
  },
  gameImage: {
    marginTop: 10,
    width: WIDTH - 100,
    height: HEIGHT - 600,
    borderRadius: 6,
    resizeMode: "cover",
  },
  genreContainer: {
    backgroundColor: "#67666A",
    borderRadius: 6,
    padding: 5,
    margin: 5,
  },
  gameGenres: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",

  },
  modalFormat: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default GameModal;
