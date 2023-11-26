import { useContext } from "react";
import SongItem from "./songListItem";
import { MusicContext } from "../context/music-context";

const SongList = () => {
  const mc = useContext(MusicContext)
  return (
    <div className={`song-list ${mc.displayList ? "displaying" : ""}`}>
      <p className="song-header">
        <span>لیست اهنگ ها</span>
        <span
          onClick={() => mc.setDisplayList(!mc.displayList)}
          className="close-list"
        >
          <i className="bi bi-x"></i>
        </span>
      </p>
      {mc.songs.map((s) => (
        <div className="song-list-items">
          <SongItem
            key={s.id}
            song={s}
          />
        </div>
      ))}
    </div>
  );
};

export default SongList;
