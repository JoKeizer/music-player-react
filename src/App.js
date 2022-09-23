import GlobalStyle from './components/GlobalStyle';


//Adding Components
import Player from './components/Player';
import Song from './components/Song'

function App() {
  return (
    <>
      <GlobalStyle />
      <Song/>
      <Player/>
    </>
  );
}


export default App;
