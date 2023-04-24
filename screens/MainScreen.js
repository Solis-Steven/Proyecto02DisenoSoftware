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
  const [gameModalVisible, setGameModalVisible] = useState(false);
  const [gameSelected, setGameSelected] = useState(null); 

  const changeModalVisible = () => {
    setGameModalVisible(!gameModalVisible);
  }

  return (
    <ScrollView 
      style={{
        flex:1,
        backgroundColor:"black",
        paddingTop:50
    }}>

      <Header changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
      />

      <TrendingComponent
        changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
        />

      <ElectronicArts
        changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
        />

      <MicrosoftStudios
        changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
        />

      <ValveSoftware 
        changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
        />

      <CrisVelasco
        changeModalVisible={changeModalVisible}
        setGameSelected={setGameSelected}
        />


      {/* <View style={{alignItems:"center", justifyContent:"center"}}>
        <LoadingScreen />
      </View> */}


      <Modal
        transparent={true}
        animationType="fade"
        visible={gameModalVisible}
        onRequestClose={changeModalVisible}
        flex={{flex: 1}}>
        <GameModal
          changeModalVisible={changeModalVisible}
          game={gameSelected}
        />
      </Modal>
    </ScrollView>
  )
}

export default MainScreen