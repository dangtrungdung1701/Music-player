import { useState, useEffect } from "react";
import Player from "./components/Player";
import * as Music from "./components/SongData";
function App() {
  const [songs, setSongs] = useState(Music.SongData);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        nextSongIndex={nextSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
