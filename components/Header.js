import { 
  ImageBackground,
  View, 
  Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HamburgerMenu from './HamburguerMenu';
import SBar from './SBar';
import Pickers from './Pickers';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [games, setGames] = useState([]);

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
  
  return (
    games.length > 0 && (
    <View>
      <ImageBackground 
        source={{
          uri: `${games[Math.floor(Math.random() * (games.length - 11))]["background_image"]}`
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
         <HamburgerMenu />
        </View>

        
        {/* <SBar/> */}
        

        <Pickers />
      </ImageBackground>
    
    </View>
    )
  )
}

export default Header