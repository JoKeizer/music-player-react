import styled from 'styled-components';
import { Container } from './styles'
// import { device } from './device';

// import { playAudio } from './util';
const LibrarySong = ({
   song,
   songs,
   setCurrentSong,
   id,
   audioRef,
   isPlaying,
   setSongs
   }) => {

    const songSelectHandler = async () => {
      const selectedSong = songs.filter((state) => state.id === id);
      await setCurrentSong({ ...selectedSong[0] });
      const newSongs = songs.map((song) => {
        if (song.id === id) {
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
  
      //Play audio
      if (isPlaying) audioRef.current.play();

    };


  return(
    <SongContainer 
    onClick={songSelectHandler}
    className={`${song.active ? 'selected' : ''}`}
    >
        <img src={song.cover} alt={song.name}></img>
        <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </SongDescription>

        
    </SongContainer>
  )
}
const SongContainer = styled(Container)`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;


  img {
    width: 30%;
  }
  &:hover {
    background: rgb(222,222,255)
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;

  }
  h3 {
    font-size: 1rem;
  }



`
const SongDescription = styled.div`
  padding-left: 1rem;

  h3 {
    font-size: 1rem;
  }
    h4 {
    font-size: 0.7rem;
  }
`
export default LibrarySong