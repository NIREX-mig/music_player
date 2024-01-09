"use client";

import { useEffect, useRef } from "react";

const Player = ({ url, isPlay, volume }) => {
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

  return <audio src={url} ref={ref} />;
};

export default Player;
