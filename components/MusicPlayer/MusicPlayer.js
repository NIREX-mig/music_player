"use client";

import { useState } from "react";

import VolumeBar from "./VolumeBar";
import Controler from "./Controler";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const url =
    "https://cdns-preview-9.dzcdn.net/stream/c-977e86e13cd9cb19794f48ad6c1086ee-2.mp3";

  const [musicPlay, setMusicPlay] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [isPlay, setIsPlay] = useState(false); // properties come form sclice
  const [duration, setDuration] = useState(null);

  const handelClick = () => {
    setMusicPlay(!musicPlay);
    setIsPlay(!isPlay);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const onChange = (e) => {
    const value =  parseInt(e.target.value)
    setSeekValue(value);
    setSeekTime(value)
  };

  return (
    <section className="flex justify-around  w-[99vw] sm:w-[79vw] 2xl:w-[80vw] h-20 rounded-tr-lg rounded-tl-lg bottom-4 backdrop-blur-md bg-black/35 p-1">
      <Track isPlay={isPlay} />
      <div className="w-[30rem] xl:w-[37rem] ">
        <Controler 
          musicPlay={musicPlay} 
          handelClick={handelClick} 
        />

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
          onTimeUpdate={(e) => {setSeekValue(e.target.currentTime)}}
        />
      </div>
      <VolumeBar
        value={volume}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </section>
  );
};

export default MusicPlayer;
