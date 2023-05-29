import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
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
        const url = `https://api.rawg.io/api/games/${game}?key=24ceba8caedf4f538bf69ccd25d1d011`;
        const response = await fetch(url);
        const data = await response.json();
        setGameInfo(data);
        setGenres(data.genres);
      } catch (error) {
        console.log("Error en la consulta a la api GAME MODAL:", error);
      }
    };
    gameData();
  }, [])

  return (
      <TouchableOpacity disabled={true}>
      <View
        style={{
          height: "100%",
          width: '100%',
          backgroundColor: "#1c1c1c",
          zIndex: 500,
                   
        }}
      >
        <ScrollView>
          
          <TouchableOpacity
          style={{ 
            position: "relative", 
            top: 10, 
            left: "90%",
            paddingTop: 10,
            paddingRight:10,  
          }}
          onPress={() => closeModal()}
        >
          <Ionicons name="arrow-back" size={24} color="red"/>
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
            style={styles.gameSecondaryImage}
          />
        </View>
        </ScrollView>

        
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
    width: WIDTH - 25,
    height: HEIGHT - 550,
    borderRadius: 6,
    resizeMode: "cover",
  },
  gameSecondaryImage: {
    marginTop: 10,
    width: WIDTH - 100,
    height: HEIGHT - 500,
    borderRadius: 6,
    resizeMode: "cover",
  },
  genreContainer: {
    backgroundColor: "red",
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

});

export default GameModal;
