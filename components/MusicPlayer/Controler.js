"use client";

import { MdSkipPrevious , MdSkipNext } from "react-icons/md";
import { FaPauseCircle , FaPlayCircle } from "react-icons/fa";


const Controler = ({isPlay, handelClick}) => {
    
  return (
    <div className="flex gap-2 justify-center pt-2 w-full">
      <MdSkipPrevious className="w-7 h-7" />
      {isPlay ? <FaPauseCircle onClick={handelClick} className="w-7 h-7" /> :  <FaPlayCircle onClick={handelClick} className="w-7 h-7" /> }

      <MdSkipNext className="w-7 h-7" />
    </div>
  )
}

export default Controler
