import React, { useState, useEffect } from 'react';   
import { ScrollView,View, TextInput, StyleSheet, TouchableOpacity, Button, Modal, Text, Image} from 'react-native';

// const { width } = Dimensions.get('window');
// const modalWidth = width * 0.8;

const ModalCom = ({visible, onClose, games, list}) => {

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <View>
                <Text style={styles.closeButtonText}>X</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.modalContent}>
        {/* <ScrollView> */}
          {/* <Text style={styles.modalText}>Este es su juego</Text> */}
          {
            list.map(game =>(
              <Image visible={false}
                key={game["id"]}
                source={{ uri: `${game["background_image"]}` }} 
                style={{
                  width:105,
                  height:152,
                  margin:10,
                  borderRadius:6,
                  resizeMode:"cover"

                }} />

            ))
          }
          {/* </ScrollView> */}
         
          
          
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
    backgroundColor: '#1c1c1c',
    width: '100%',
    padding: 40,
    alignItems: 'center'
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
});

export default ModalCom

