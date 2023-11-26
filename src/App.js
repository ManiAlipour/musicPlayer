import { useState } from "react";
import Player from "./components/player";

import Song from "./components/song";
import musicData from "./components/data";
import SongList from "./components/songList";
import ShowList from "./components/showList";
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [displayList, setDisplayList] = useState(true);
  const [animationSong, setAnimationSong] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <>
      <ShowList displayList={displayList} setDisplayList={setDisplayList} />
      <Song animationSong={animationSong} currentSong={currentSong} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setAnimationSong={setAnimationSong}
        setSongs={setSongs}
        setIsPlayed={setIsPlayed}
        isPlayed={isPlayed}
      />
      <SongList
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        displayList={displayList}
        setDisplayList={setDisplayList}
        setAnimationSong={setAnimationSong}
        isPlayed={isPlayed}
        setIsPlayed={setIsPlayed}


    
      />
    </>
  );
}

export default App;
