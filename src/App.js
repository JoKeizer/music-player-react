import React, {useState} from "react"

import GlobalStyle from './components/GlobalStyle';


import Player from './components/Player';
import Song from './components/Song'

import data from './data'

function App() {
console.log(data)
const [songs, setsongs] = useState(data());

  return (
    <>
      <GlobalStyle />
      <Song/>
      <Player/>
    </>
  );
}


export default App;
