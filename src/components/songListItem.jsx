import { useContext } from "react";
import { MusicContext } from "../context/music-context";

const SongItem = ({song}) => {
  // using context
  const mc = useContext(MusicContext)
  // find active song and set in current song
  const handleMusic = (e) => {
    const selectedSong = mc.songs.filter((s) => s.id === song.id);
    mc.setCurrentSong(selectedSong[0]);
    
    const newSongs = mc.songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, covered: true };
      } else {
        return { ...s, covered: false };
      }
    });
    mc.setIsPlayed(false)
    mc.setAnimationSong(false)
    mc.setSongs(newSongs);
  };
  return (
    <div
      onClick={(e) => handleMusic(e)}
      dir="rtl"
      className={`song-list-items ${song.covered ? "selected" : ""}`}
    >
      <img loading="lazy" className="song-cover" src={song.cover} alt="" />
      <div className="song-description">
        <span style={{ fontSize: "15px" }} className="song-artist">
          <b>{song.name}</b>
        </span>
        <br />
        <span style={{ fontSize: "13px" }} className="song-name">
          {song.artist}
        </span>
      </div>
    </div>
  );
};

export default SongItem;
