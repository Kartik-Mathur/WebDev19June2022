import './App.css';
import PlayList from './components/PlayList';
import Toggle from './components/Toggle';
import useToggle from './hooks/useToggle';

function App() {
  const [showPlaylist,changePlaylistDisplay] = useToggle(true);

  return (
    <div className="App">
      <Toggle/>
      {showPlaylist && <PlayList />}
      <button onClick={()=>{changePlaylistDisplay()}}>
        {showPlaylist ? <span>Hide</span>:<span>Show</span>} Playlist
      </button>
    </div>
  );
}

export default App;
