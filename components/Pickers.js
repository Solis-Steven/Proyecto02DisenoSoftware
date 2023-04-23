import { 
    View, 
    Modal
} from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import FilteredModal from './FilteredModal';

const Pickers = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false); 

    const changeModalVisible = () => {
        setIsModalVisible(!isModalVisible);
    }

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
    
    return (
        <>
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
                    if(itemValue !== "") {
                        changeModalVisible();
                    }
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
        </>
  
          
      
    )
  }
  
  export default Pickers