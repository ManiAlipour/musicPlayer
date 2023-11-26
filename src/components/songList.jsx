import SongItem from "./songListItem";

const SongList = ({
  songs,
  setCurrentSong,
  setSongs,
  displayList,
  setDisplayList,
  setAnimationSong,
  setIsPlayed,
  isPlayed
}) => {
  return (
    <div className={`song-list ${displayList ? "displaying" : ""}`}>
      <p className="song-header">
        <span>لیست اهنگ ها</span>
        <span
          onClick={() => setDisplayList(!displayList)}
          className="close-list"
        >
          <i className="bi bi-x"></i>
        </span>
      </p>
      {songs.map((s) => (
        <div className="song-list-items">
          <SongItem
            key={s.id}
            song={s}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            setAnimationSong={setAnimationSong}
            isPlayed={isPlayed}
            setIsPlayed={setIsPlayed}
    
          />
        </div>
      ))}
    </div>
  );
};

export default SongList;
