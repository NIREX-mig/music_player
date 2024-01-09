'use client';

import { useRef } from 'react'

const Player = () => {
    const ref = useRef();
  return (
    <audio
    src=""
    ref={ref}
    />
  )
}

export default Player
