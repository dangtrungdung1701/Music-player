import { useState, useEffect } from "react";
import Player from "./components/Player";
function App() {
  const [songs, setSongs] = useState([
    {
      title: "Dung",
      artist: "Dung",
      img_src: "./images/song-1.jpg",
      src: "./music/3 1 0 7 rap.m4a",
    },
    {
      title: "Ai rồi cũng bỏ anh đi",
      artist: "Dung",
      img_src: "./images/song-2.jpg",
      src: "./music/Ai rồi cũng bỏ anh đi.m4a",
    },
    {
      title: "Cỏ gió và mây",
      artist: "Dung",
      img_src: "./images/song-3.jpg",
      src: "./music/Cỏ gió và mây.m4a",
    },
    {
      title: "FA",
      artist: "Dung",
      img_src: "./images/song-4.jpg",
      src: "./music/FA.m4a",
    },
  ]);
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
