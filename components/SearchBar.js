import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import ModalCom from './searchModalComponent';

const SBar = ({setGameSelected, changeModalVisible}) => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [games, setGames] = useState(false);
  const FoundedGames = {foundedGames: []};
  


  const gamesData = async() => {
    try {
      const url = `https://api.rawg.io/api/games?page_size=20&search=${searchText}&key=24ceba8caedf4f538bf69ccd25d1d011`;
      const response = await fetch(url);
      const data = await response.json();
      setGames(data.results)
    } catch(error) {
      console.log("Error en la consulta a la api:", error);
    } 
  }
  
  const changeModal = () => {
    gamesData();  
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
    return FoundedGames.foundedGames;
  }
  
  
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search a game"
              onChangeText={setSearchText}
              selectTextOnFocus={false} //desactiva la selección automática de texto
            />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={changeModal} >
          <Ionicons name="search" size={16} color="#fff" style={styles.buttonIcon}/>
        </TouchableOpacity>
        {
          games
          ? (
            <ModalCom
              setGameSelected={setGameSelected}
              changeModalVisible={changeModalVisible}
              visible={isModalVisible} 
              changeModal={changeModal} 
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
    backgroundColor:'#e50914',
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: "20%",
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  searchContainer: {
    backgroundColor: '#f7f7f7',
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
    backgroundColor: '#f7f7f7'
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