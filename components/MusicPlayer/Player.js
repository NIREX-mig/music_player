'use client';

import { useRef } from 'react'

const Player = ({url, isPlay}) => {
  const ref = useRef();

  if(isPlay){
    ref.current.play();
  }
  else{
    
  }
  return (
    <audio
    src={url}
    ref={ref}
    />
  )
}

export default Player
