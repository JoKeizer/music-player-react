import styled from 'styled-components';
import { Container } from './styles'

import { device } from './device';

const Song = ({ currentSong }) => {
  return(
    <SongContainer>
    <img src={currentSong.cover} alt={currentSong.name}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
        
    </SongContainer>
  )
}
const SongContainer = styled(Container)`
  min-height: 60vh;
  background-color: white;
  img {
    width: 20%;
    border-radius: 50%;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;

  }
  h3 {
    font-size: 1rem;
  }

  @media ${device.mobileM} { 
    h2 {
      font-size: 2rem;
    }
  }
`

export default Song