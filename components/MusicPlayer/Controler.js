"use client";

import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, previousSong } from "@/redux/features/playerSlice";

const Controler = ({ isPlay, handelClick }) => {
  const dispatch = useDispatch();
  

  const handleNext = () => {
    dispatch(nextSong());
  }

  const handlePrevious = () =>{
    dispatch(previousSong());
  }

  return (
    <div className="flex gap-2 justify-center pt-2 w-full">
      <button
        type="button"
        onClick={handlePrevious}
        className="inline-block rounded-full leading-normal transition duration-150 ease-in-out focus:outline-none active:bg-white/50"
      >
        <MdSkipPrevious
          size={10}
          className="w-7 h-7 cursor-pointer"
        />
      </button>
      {isPlay ? (
        <button
          type="button"
          className="inline-block rounded-full leading-normal transition duration-150 ease-in-out focus:outline-none active:bg-white/50"
        >
          <FaPauseCircle
            onClick={handelClick}
            className="w-7 h-7 cursor-pointer"
          />
        </button>
      ) : (
        <button
          type="button"
          className="inline-block rounded-full leading-normal transition duration-150 ease-in-out focus:outline-none active:bg-white/50"
        >
          <FaPlayCircle
            onClick={handelClick}
            className="w-7 h-7 cursor-pointer"
          />
        </button>
      )}
      <button
        type="button"
        className="inline-block rounded-full leading-normal transition duration-150 ease-in-out focus:outline-none active:bg-white/50"
        onClick={handleNext}
      >
        <MdSkipNext
          className="w-7 h-7 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Controler;
