
import React  from "react"

import styled from 'styled-components';
import { Container } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import { device } from './device';

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}) => {

  const playSongHandler = () => {
    // console.log(audioRef.current);
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };


  return(
    <PlayerContainer>
      <TimeControl>
        <p>{getTime(songInfo.currentTime)}</p>
        <Track    style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}>
        <input 
        min={0} 
        max={songInfo.duration || 0} 
        value={songInfo.currentTime} 
        type="range" 
        onChange={dragHandler}
        />
        <AnimateTrack style={trackAnim} ></AnimateTrack>

        </Track>
   
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </TimeControl>
      <PlayControl>
        <StyledFontAwesomeIcon 
        onClick={() => skipTrackHandler("skip-back")}
        icon={faAngleLeft}/>         
        <StyledFontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay }/>         
        <StyledFontAwesomeIcon
        onClick={() => skipTrackHandler("skip-forward")}
        icon={faAngleRight}
        />         
      </PlayControl>

    </PlayerContainer>
  )
}

const PlayerContainer = styled(Container)`
justify-content: space-between;
`
const TimeControl = styled.div`
width: 50%;
display: flex;
flex-direction: column;
position: relative;

@media ${device.mobileS} { 
  width: 90%;
}
input {
  width: 100%;
  padding: 1rem 0rem;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
}
p {
  padding: 1rem;
}
`
const PlayControl = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
width: 30rem;
@media ${device.mobileS} { 
  width: 22rem;
}
svg {
  cursor: pointer;
}
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    font-size: 3rem;;
`

const Track = styled.div`
  width: 100%;
  height: 1rem;
  background: pink;
  position: relative;
  border-radius: 1rem;
  overflow: hidden; 
`

const AnimateTrack = styled.div`
background: rgb(204, 204, 204);
width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  padding: 1rem;
  pointer-events: none; 
`
export default Player