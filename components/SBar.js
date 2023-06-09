import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Button, Modal, Text  } from 'react-native';
import { Feather } from '@expo/vector-icons'; //importa Feather icons 
import ModalCom from './ModalCom';

const SBar = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [games, setGames] = useState(false);

  const Url = {url: ''};
  const FoundedGames = {foundedGames: []};
  // console.log(searchedText);

  useEffect(() => {
    const gamesData = async() => {
      try {
        const url = "https://api.rawg.io/api/games?page_size=200&key=81ebbf2905154d1e9bce047672266b0e";
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results)
        
        
      } catch(error) {
        console.log("Error en la consulta a la api:", error);
      } 
    }
      gamesData();  
  }, []);

  const changeModal = () => {
    setModalVisible(!isModalVisible); 
  } 


  function returnList() {
    
    const info = games.map(game => JSON.parse(JSON.stringify(game)));
    info.forEach(game => {
      if(game.name.toUpperCase() == searchText.toUpperCase()){
        FoundedGames.foundedGames.unshift(game);
      }
      else if(game.name.split(" ")[0].toUpperCase() == searchText.split(" ")[0].toUpperCase()){
        FoundedGames.foundedGames.push(game);

      } else {
         console.log("not found");
      }
    });
    console.log(FoundedGames.foundedGames);
    return FoundedGames.foundedGames;
  }
  
  
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={16} color="#aaa" style={styles.icon} />
          {/**revisar */}
          <TextInput
            style={styles.input}
            placeholder="Search a game"
            onChangeText={setSearchText}
            selectTextOnFocus={false} //desactiva la selección automática de texto
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={changeModal} >
          <Feather name="search" size={16} color="#fff" style={styles.buttonIcon} /> {/*icono de lupa blanca*/}
        </TouchableOpacity>
        {
          games
          ? (
            <ModalCom
              visible={isModalVisible} 
              onClose={changeModal} 
              games={games}
              list={returnList()}/>

          ):(
            <></>
          )
        }
        
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    backgroundColor: '#e50914',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 0, 
  },
});

export default SBar;