import { 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView,
  Modal 
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LoadingScreen from './LoadingScreen';
import TrendingComponent from '../components/TrendingComponent';
import ElectronicArts from '../components/ElectronicArts';
import MicrosoftStudios from '../components/MicrosoftStudios';
import ValveSoftware from '../components/ValveSoftware';
import CrisVelasco from '../components/CrisVelasco';
import GameModal from '../components/GameModal';

const MainScreen = () => {
  const [games, setGames] = useState(false);
  const [gameModalVisible, setGameModalVisible] = useState(false);
  const [gameSelected, setGameSelected] = useState(null); 

  const changeModalVisible = () => {
    setGameModalVisible(!gameModalVisible);
  }



  

  useEffect(() => {
    const gamesData = async() => {
      try {
        const url = "https://api.rawg.io/api/games?page_size=200&key=81ebbf2905154d1e9bce047672266b0e";
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results)
        console.log("Games", data.results)
        
      } catch(error) {
        console.log("Error en la consulta a la api MAINSCREEN:", error);
      }
    }
      gamesData();
  }, []);

  useEffect(() => {
    console.log("Game Selected", gameSelected);
  }, [gameSelected]);

  return (
    <ScrollView 
      style={{
        flex:1,
        backgroundColor:"black",
        paddingTop:50
      }}>

        {
          games 
            ? (
              <>
                <Header 
                  games={games}
                  num={Math.floor(Math.random() * games.length)}
                  
                />


                {console.log(typeof handleGameSelected)}

                <TrendingComponent
                  games={games}
                  num={Math.floor(Math.random() * games.length)}
                  changeModalVisible={changeModalVisible}
                  setGameSelected={setGameSelected}
                  />

                <ElectronicArts 
                  />

                <MicrosoftStudios 
                  />

                <ValveSoftware 
                  />

                <CrisVelasco
                  />
              </>
            )
            : (
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <LoadingScreen />
              </View>
            )
        }
      <Modal
            transparent={true}
            animationType="fade"
            visible={gameModalVisible}
            onRequestClose={changeModalVisible}>
            <GameModal
              changeModalVisible={changeModalVisible}
              game={gameSelected}
            />
        </Modal>


    </ScrollView>
  )
}

export default MainScreen