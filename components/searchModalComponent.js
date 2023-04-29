import React, { useState, useEffect } from 'react';   
import { 
  ScrollView,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, Text
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import GameColumn from './GameColumn';

const ModalCom = ({visible, changeModal, list, setGameSelected, changeModalVisible}) => {
  const [lista, setList] = useState([]);

  useEffect(() => {
    setList(list);
  },[lista]);

  return (
    
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={changeModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>
          <Ionicons name="arrow-back" size={24} color="red"/>
          </Text> 
        </TouchableOpacity>

        <ScrollView>
          {   
            list.length > 0
            ? ( 
              list.map(game =>(

                <GameColumn game={game} key={game["id"]}
                  setGameSelected={setGameSelected}
                  changeModalVisible={changeModalVisible}
                  changeModal={changeModal}
                  
                />
              ))
  
            ):(
              <View style={styles.notFound}>
                <Text style={{color: "white", textAlign: "center", fontWeight: "bold" }}>No se ha encontrado el juego buscado</Text>
              </View>
            )
          }
          </ScrollView>
          
        </View>
      </View>
    </Modal>
    
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    flex:1,
    backgroundColor: '#1c1c1c',
    width: '100%',
    padding: 40,
    alignItems: 'center',
    height: '180%'
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    padding: 5
  },
  closeButtonText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalText: {
    color: 'white',
    fontSize: 16,
  },
  notFound: {
    marginTop: '25%',
    marginBottom: '25%',
  }
});

export default ModalCom

