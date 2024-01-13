"use client";

import { useState } from "react";

import VolumeBar from "./VolumeBar";
import Controler from "./Controler";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const url =
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/04/10/e7/0410e7e9-e1e9-7af0-2121-df591de8f556/mzaf_16020800116271435292.plus.aac.ep.m4a";

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
