import { useContext } from "react";
import { MusicContext } from "../context/music-context";

const Song = () => {
  const mc = useContext(MusicContext);
  return (
    <div className="song-container">
      <span className="song-name">{mc.currentSong.name}</span>
      <img
        loading="lazy"
        className={`song-cover ${mc.animationSong ? "animationSong" : ""}`}
        src={mc.currentSong.cover}
        alt=""
      />
      <h3 className="song-artist">{mc.currentSong.artist}</h3>
    </div>
  );
};

export default Song;
