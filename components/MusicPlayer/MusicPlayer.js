"use client";

import { useState } from "react";

import VolumeBar from "./VolumeBar";
import Controler from "./Controler";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlay } from "@/redux/features/playerSlice";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const {isMusicPlayerOpen , isPlay, activeSong} = useSelector((state)=>state.player);

  const url =activeSong?.track?.hub.actions[1]?.uri;

  // const [musicPlay, setMusicPlay] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(null);

  const handelClick = () => {
    dispatch(setIsPlay(!isPlay));
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value);
    setSeekValue(value);
    setSeekTime(value);
  };

  return (
    <>
      { isMusicPlayerOpen &&
        <section className={`${isMusicPlayerOpen && "sm:-translate-y-[100px] -translate-y-20" } flex justify-around  w-[99vw] sm:w-[79vw] 2xl:w-[80vw] h-20 rounded-tr-lg rounded-tl-lg bottom-4 backdrop-blur-md bg-black/65 p-1`}>
          <Track isPlay={isPlay} activeSong={activeSong} />
          <div className="w-[30rem] xl:w-[37rem] ">
            <Controler isPlay={isPlay} handelClick={handelClick} />

            <SeekBar
              value={seekValue}
              onChange={onChange}
              duration={duration}
            />

            <Player
              url={url}
              isPlay={isPlay}
              volume={volume}
              setDuration={setDuration}
              seekTime={seekTime}
              onLoadedMetadata={(e)=>setDuration(e.target.duration.toFixed(2))}
              onTimeUpdate={(e) => {
                setSeekValue(e.target.currentTime);
              }}
            />
          </div>
          <VolumeBar
            value={volume}
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
        </section>
      }
    </>
  );
};

export default MusicPlayer;
