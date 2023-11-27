import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "../context/music-context";

const Player = () => {
  //using context
  const mc = useContext(MusicContext)
  // changing active song
  useEffect(() => {
    const newSongs = mc.songs.map((s) => {
      if (s.id === mc.currentSong.id) {
        return { ...s, covered: true };
      } else {
        return { ...s, covered: false };
      }
    });
    // setting active song
    mc.setSongs(newSongs);
  }, [mc.currentSong]);

  const seekBarRef = useRef(null);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  // playing music in skip or backwards
  useEffect(()=>{
  if(mc.currentSong === mc.songs[0]){
    mc.setIsPlayed(false)
    mc.setAnimationSong(false)
  }else{
    mc.setAnimationSong(false)
    mc.setIsPlayed(false)
    setTimeout(()=>{
      audioRef.current.play()
      mc.setAnimationSong(true)
      mc.setIsPlayed(true)
    } , 3000)
  }   
  },[mc.currentSong])


  const musicHandler = (e) => {
    const { currentTime } = e.target;
    const { duration } = e.target;
    if (currentTime === duration) {
      const musucIndex = mc.songs.findIndex((s) => s.id === mc.currentSong.id);
      if (musucIndex === mc.songs.length - 1) {
        mc.setCurrentSong(mc.songs[0]);
      } else {
        mc.setCurrentSong(mc.songs[musucIndex + 1]);
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

  // handle skip or backwards music
  const musicSkip = (dir) => {
    const musucIndex = mc.songs.findIndex((s) => s.id === mc.currentSong.id);
    if (dir === "skip") {
      if (musucIndex === mc.songs.length - 1) {
        mc.setCurrentSong(mc.songs[0]);
      } else {
        mc.setCurrentSong(mc.songs[musucIndex + 1]);
      }
    } else if (dir === "back") {
      if (musucIndex === 0) {
        mc.setCurrentSong(mc.songs[mc.songs.length - 1]);
      } else {
        mc.setCurrentSong(mc.songs[musucIndex - 1]);
      }
    }
  };
  // format the current and duration song
  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // drage the current song handler
  const dragHandler = (e) => {
    const { value } = e.target;
    setSongInfo({ ...songInfo, currentTime: value });
    audioRef.current.currentTime = value;
  };

  // style with timebar
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
          {mc.isPlayed ? (
            <FaPause
              color="#333"
              onClick={() => {
                audioRef.current.pause();
                mc.setIsPlayed(false);
                mc.setAnimationSong(false);
              }}
              size={30}
            />
          ) : (
            <FaPlay
              color="#333"
              onClick={() => {
                audioRef.current.play();
                mc.setIsPlayed(true);
                mc.setAnimationSong(true);
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
        src={mc.currentSong.audio}
      ></audio>
    </>
  );
};

export default Player;
