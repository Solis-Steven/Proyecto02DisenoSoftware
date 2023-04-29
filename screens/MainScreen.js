import { ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
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
    
    <>
      <ScrollView 
        style={{
          flex:1,
          backgroundColor:"black"}}
      >

        <Header 
          changeModalVisible={changeModalVisible}
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
      </ScrollView>

      <Modal
        transparent={true}
        animationType="fade"
        visible={gameModalVisible}
        onRequestClose={changeModalVisible}
      >
        <GameModal
          changeModalVisible={changeModalVisible}
          game={gameSelected}
        />
      </Modal>
    </>
    
  )
}

export default MainScreen