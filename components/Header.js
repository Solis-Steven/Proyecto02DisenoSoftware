import { 
  ImageBackground, 
  Pressable, 
  Text, 
  View, 
  Image, 
  Modal
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from "@expo/vector-icons"
import {Picker} from '@react-native-picker/picker';
import HamburgerMenu from './HamburguerMenu';
import FilteredModal 
  from './FilteredModal';
import { useNavigation } from '@react-navigation/native';
import SBar from './SBar';

const Header = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [games, setGames] = useState([]);
  const [num, setNum] = useState(0);

  const changeModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    navigation.openDrawer();
  };

  const platforms = [
    { label: 'Platform', value: '' },
    { label: 'PC', value: 'pc' },
    { label: 'PlayStation', value: 'playstation' },
    { label: 'Xbox', value: 'xbox' },
  ];

  const genres = [
    { label: 'Genre', value: '' },
    { label: 'Action', value: 'action' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'Sports', value: 'sports' },
  ];
  const navigation = useNavigation();

  // useEffect(() => {
  //   // actualiza el valor de "num" cada vez que el componente se renderiza
  //   setNum(Math.floor(Math.random() * (games.length - 11)));
  //   console.log("Aqui", games.length);
  // }, [games]);

  // useEffect(() => {
  //   const gamesData = async() => {
  //     try {
  //       const url = "https://api.rawg.io/api/games?page_size=200&key=81ebbf2905154d1e9bce047672266b0e";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setGames(data.results)
  //       console.log("Desde header",);
        
  //     } catch(error) {
  //       console.log("Error en la consulta a la api:", error);
  //     }
  //   }
  //     gamesData();
  // }, []);
  
  return (
    games.length > 0 && 

      (

    <View>
      {/* <ImageBackground 
        source={{
          uri: `${games[num]["background_image"]}`
        }}
        style={{
          width: "100%",
          height: 480,
          position: "relative"
        }}>
  
        <View 
          style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
          }}>
          <Image
            style={{ height: 50, width: 190, marginTop: 20 }}
            source={require('../assets/logo-removebg.png')}
          />
         <HamburgerMenu onPress={toggleSidebar} isSidebarOpen={isSidebarOpen} navigation={navigation}/>
        </View>

        
        <SBar/>
        

        <View
          style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-evenly",
            width:"90%",
            margin:20,
          }}>

          <Picker
            selectedValue={selectedPlatform}
            onValueChange={(itemValue) => {
              setSelectedPlatform(itemValue);
              changeModalVisible();
            }}
            style={{ height: 50, width: "45%", color:"white" }}
          >
            {platforms.map((platform) => (
              <Picker.Item 
                key={platform.value} 
                label={platform.label} 
                value={platform.value}
                style={{ textAlign:"center" }} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedGenre}
            onValueChange={(itemValue) => {
              setSelectedGenre(itemValue);
              if(itemValue !== "") {
                changeModalVisible();
              }
            }}
            style={{ height: 50, width: "45%", color:"white" }}
          >
            {genres.map((genre) => (
              <Picker.Item 
                key={genre.value} 
                label={genre.label} 
                value={genre.value}
                style={{ textAlign:"center" }} />
            ))}
          </Picker>
        </View>

          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={changeModalVisible}>

            <FilteredModal 
              changeModalVisible={changeModalVisible}
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
              />

          </Modal>
      </ImageBackground> */}
    
    </View>
      )
  )
}

export default Header