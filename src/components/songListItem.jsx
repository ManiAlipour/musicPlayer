const SongItem = ({
  song,
  setCurrentSong,
  songs,
  setSongs,
  setAnimationSong,
  isPlayed,
  setIsPlayed,

}) => {
  const handleMusic = (e) => {
    const selectedSong = songs.filter((s) => s.id === song.id);
    setCurrentSong(selectedSong[0]);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, covered: true };
      } else {
        return { ...s, covered: false };
      }
    });
    setIsPlayed(false)
    setAnimationSong(false)
    setSongs(newSongs);
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
