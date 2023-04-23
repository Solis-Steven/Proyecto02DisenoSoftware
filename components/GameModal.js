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
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height - 80;

const GameModal = ({ changeModalVisible, game }) => {
  const [gameInfo, setGameInfo] = useState(null);

  const closeModal = () => {
    changeModalVisible();
  };

  useEffect(() => {
    const gameData = async () => {
        console.log("ENTREEEE")
      try {
        const url = `https://api.rawg.io/api/games/${game}?key=81ebbf2905154d1e9bce047672266b0e`;
        const response = await fetch(url);
        const data = await response.json();
        setGameInfo(data);
        console.log(data);
      } catch (error) {
        console.log("Error en la consulta a la api GAME MODAL:", error);
      }
    };
    console.log("Game", game);
  }, []);

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
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={closeModal}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>;
};

export default GameModal;
