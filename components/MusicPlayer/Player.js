"use client";

import { useEffect, useRef } from "react";

const Player = ({ url, isPlay, volume, setDuration, seekTime , setCurrentTime}) => {
  const ref = useRef();
  if (ref.current) {
    if (isPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  // useEffect(()=>{
  //     setCurrentTime(ref.current.currentTime);
  // },[isPlay])


  useEffect(() => {
    ref.current.volume = volume;
  },[volume]);

  useEffect(()=>{
    ref.current.currentTime = seekTime;
  }, [seekTime])
  
  useEffect(()=>{
    const songDuration =ref.current.duration;
    setDuration( songDuration.toFixed(2));

  }, []);

  return (
    <audio 
      src={url} 
      ref={ref}
    />
   )
};

export default Player;
