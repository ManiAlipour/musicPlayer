import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Player = ({
  currentSong,
  setAnimationSong,
  setCurrentSong,
  songs,
  setSongs,
  setIsPlayed,
  isPlayed,
}) => {
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return { ...s, covered: true };
      } else {
        return { ...s, covered: false };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  const seekBarRef = useRef(null);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const musicHandler = (e) => {
    const { currentTime } = e.target;
    const { duration } = e.target;
    if (currentTime === duration) {
      const musucIndex = songs.findIndex((s) => s.id === currentSong.id);
      if (musucIndex === songs.length - 1) {
        setCurrentSong(songs[0]);
        setAnimationSong(false);
        setIsPlayed(!isPlayed);
      } else {
        setCurrentSong(songs[musucIndex + 1]);
        setAnimationSong(false);
        setIsPlayed(!isPlayed);
      }
    }
    // calculate percentage
    const roundDuration = Math.round(duration);
    const roundCurrent = Math.round(currentTime);
    const animationPercentage = Math.round(
      (roundCurrent / roundDuration) * 100
    );
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };

  const musicSkip = (dir) => {
    const musucIndex = songs.findIndex((s) => s.id === currentSong.id);
    if (dir === "skip") {
      if (musucIndex === songs.length - 1) {
        setCurrentSong(songs[0]);
        setIsPlayed(!isPlayed);
        setAnimationSong(false);
      } else {
        setCurrentSong(songs[musucIndex + 1]);
        setAnimationSong(false);
        setIsPlayed(!isPlayed);
      }
    } else if (dir === "back") {
      if (musucIndex === 0) {
        setCurrentSong(songs[songs.length - 1]);
        setIsPlayed(!isPlayed);
        setAnimationSong(false);
      } else {
        setCurrentSong(songs[musucIndex - 1]);
        setIsPlayed(!isPlayed);
        setAnimationSong(false);
      }
    }
  };

  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    const { value } = e.target;
    setSongInfo({ ...songInfo, currentTime: value });
    audioRef.current.currentTime = value;
  };

  const animationTrack = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <>
      <div className="player">
        <div className="time-controll">
          <span>{timeFormat(songInfo.currentTime) || "00:00"}</span>

          <div className="track">
            <input
              type="range"
              onChange={(e) => dragHandler(e)}
              value={songInfo.currentTime || 0}
              max={songInfo.duration || 0}
              className="rangeInput"
              ref={seekBarRef}
            />
            <div style={animationTrack} className="animate-track"></div>
          </div>
          <span>{timeFormat(songInfo.duration) || "00:00"}</span>
        </div>
        <div className="play-controll">
          <FaAngleDoubleLeft
            onClick={() => musicSkip("back")}
            color="#333"
            size={30}
          />
          {isPlayed ? (
            <FaPause
              color="#333"
              onClick={() => {
                audioRef.current.pause();
                setIsPlayed(false);
                setAnimationSong(false);
              }}
              size={30}
            />
          ) : (
            <FaPlay
              color="#333"
              onClick={() => {
                audioRef.current.play();
                setIsPlayed(true);
                setAnimationSong(true);
              }}
              size={30}
            />
          )}
          <FaAngleDoubleRight
            color="#333"
            size={30}
            onClick={() => musicSkip("skip")}
          />
        </div>
      </div>
      <audio
        onTimeUpdate={(e) => {
          musicHandler(e);
        }}
        onLoadedMetadata={(e) => {
          musicHandler(e);
        }}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </>
  );
};

export default Player;
