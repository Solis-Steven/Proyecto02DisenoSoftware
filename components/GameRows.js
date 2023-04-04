import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GameRow from './GameRow'

const GameRows = ({games}) => {
 
  const [gamesRow, setGamesRow] = useState();
  const [initialLimit, setInitialLimit] = useState(10);
  const [finalLimit, setFinalLimit] = useState(initialLimit + 20);

  return (
    <View>
      {
        
      }
    </View>
  )
}

export default GameRows