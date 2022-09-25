import { faDongSign } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from 'styled-components';

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus
  }) => {
  return (
    <Libary className={` ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <LibarySongContainer >
         
        {songs.map((song) => (
          <LibrarySong
          song={song}
          setCurrentSong={setCurrentSong}
          songs={songs}
          id={song.id}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
      
          />
        ))}
      </LibarySongContainer>
    </Libary>
  );
};



const Libary = styled.div`
 position: fixed;
  box-shadow: 2px 2px 50px rgb(221, 221, 221);
  border-radius: 1rem;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  overflow: scroll;
  background: white;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  /* opacity: 0; */

  h2 {
    padding: 2rem;
  }

  &.active-library {
  transform: translateX(0%);
  opacity: 1;
}
`
const LibarySongContainer = styled.div``

export default Library;
