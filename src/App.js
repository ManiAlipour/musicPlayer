import { useState } from "react";
import Player from "./components/player";
import { MusicContext } from "./context/music-context";
import Song from "./components/song";
import musicData from "./components/data";
import SongList from "./components/songList";
import ShowList from "./components/showList";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [displayList, setDisplayList] = useState(true);
  const [animationSong, setAnimationSong] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <>
      <MusicContext.Provider
        value={{
          songs,
          currentSong,
          setCurrentSong,
          setSongs,
          displayList,
          setDisplayList,
          animationSong,
          setAnimationSong,
          isPlayed,
          setIsPlayed,
        }}
      >
        <ShowList />
        <Song />
        <Player />
        <SongList />
      </MusicContext.Provider>
    </>
  );
}

export default App;
