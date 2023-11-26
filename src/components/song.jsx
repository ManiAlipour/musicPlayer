const Song = ({ currentSong, animationSong }) => {
  return (
    <div className="song-container">
      <span className="song-name">{currentSong.name}</span>
      <img loading="lazy" className={`song-cover ${animationSong?"animationSong":""}`} src={currentSong.cover} alt="" />
      <h3 className="song-artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
