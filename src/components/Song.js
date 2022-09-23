import styled from 'styled-components';
import { Container } from './styles'

const Song = () => {
  return(
    <SongContainer>
        <h1>Picture</h1>
        <h1>Song Name</h1>
        <h1>Artist</h1>
        
    </SongContainer>
  )
}
const SongContainer = styled(Container)`
  min-height: 60vh;
  background-color: white;
`

export default Song