import React, {useState} from "react"

import GlobalStyle from './components/GlobalStyle';


import Player from './components/Player';
import Song from './components/Song'

import data from './data'

function App() {
console.log(data)
const [songs, setsongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Song currentSong={currentSong}/>
      <Player 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      />
    </>
  );
}


export default App;
