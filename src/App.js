import React, {useState , useRef} from "react"

import GlobalStyle from './components/GlobalStyle';


import Player from './components/Player';
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
import data from './data'

function App() {

const audioRef = useRef(null);

const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)
const [libraryStatus, setLibraryStatus] = useState(false);

const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,

})

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  // console.log(current, duration);

  const roundedCurrent = Math.round(current)
  const roundedDuration = Math.round(duration)

  const animation = Math.round(((roundedCurrent / roundedDuration) * 100))

  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animation})
}

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play();

  return;
};

  return (
    <>
      <GlobalStyle />
      <Nav
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </>
  );
}


export default App;
