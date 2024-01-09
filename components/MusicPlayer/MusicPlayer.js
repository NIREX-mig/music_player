"use client";

import { useState, useRef } from "react";

import VolumeBar from "./VolumeBar";
import Controler from "./Controler";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const url =
    "https://cdns-preview-2.dzcdn.net/stream/c-26a34d0188414a0f8ae592b202b75728-1.mp3";

  const [musicPlay, setMusicPlay] = useState(false);
  const [value, setValue] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const handelClick = () => {
    setMusicPlay(!musicPlay);
    setIsPlay(!isPlay)
  };

  const handleVolumeChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
  };

  return (
    <section className="flex justify-around  w-[99vw] sm:w-[79vw] 2xl:w-[80vw] h-20 rounded-tr-lg rounded-tl-lg bottom-4 backdrop-blur-md bg-black/35 p-1">
      <Track />
      <div className="w-[30rem] xl:w-[37rem] ">
        <Controler musicPlay={musicPlay} handelClick={handelClick} />
        <SeekBar />
        <Player url={url} isPlay={isPlay} />
      </div>
      <VolumeBar value={value} handleVolumeChange={handleVolumeChange} />
    </section>
  );
};

export default MusicPlayer;
