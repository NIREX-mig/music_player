"use client";

import { useEffect, useRef } from "react";

const Player = ({ url, isPlay, volume, setDuration, seekTime ,onTimeUpdate, onLoadedMetadata}) => {
  const ref = useRef();
  if (ref.current) {
    if (isPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  },[volume]);

  useEffect(()=>{
    ref.current.currentTime = seekTime;
  }, [seekTime])

  return (
    <audio 
      src={url} 
      ref={ref}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
    />
   )
};

export default Player;
