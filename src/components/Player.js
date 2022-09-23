
import styled from 'styled-components';
import { Container } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Player = () => {
  return(
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <StyledFontAwesomeIcon size="4x" icon={faAngleLeft}/>         
        <StyledFontAwesomeIcon size="2x" icon={faPlay}/>         
        <StyledFontAwesomeIcon size="2x" icon={faAngleRight}/>         
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
input {
  width: 100%;
  padding: 1rem 2rem;
}
p {
  padding: 1rem;
  color: white;
}
`
const PlayControl = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
width: 30rem;

svg {
  cursor: pointer;
}
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    font-size: 3rem;;
`;
export default Player