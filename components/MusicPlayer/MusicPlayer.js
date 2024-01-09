"use client";

import { useState, useRef } from "react";

import VolumeBar from "./VolumeBar";
import Controler from "./Controler";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const [musicPlay, setMusicPlay] = useState(false);
  const [value, setValue] = useState(0);

  const handelClick = () => {
    setMusicPlay(!musicPlay);
  };

  const handleVolumeChange =(e) =>{
    const newValue = e.target.value;
    setValue(newValue);
  }

  return (
    <section className="flex justify-around  w-[99vw] sm:w-[79vw] 2xl:w-[80vw] h-20 rounded-tr-lg rounded-tl-lg bottom-4 backdrop-blur-md bg-black/35 p-1">
      <Track />
      <div className="w-[30rem] xl:w-[37rem] ">
        <Controler musicPlay={musicPlay} handelClick={handelClick} />
        <SeekBar />
      </div>
      <VolumeBar value={value} handleVolumeChange={handleVolumeChange} />
      <Player />
    </section>
  );
};

export default MusicPlayer;
