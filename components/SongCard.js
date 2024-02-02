import { setActiveSong } from "@/redux/features/playerSlice";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";


const SongCard = ({ song , setIsPlay}) => {
  const dispatch = useDispatch();
  const handleOnClick = () =>{
    dispatch(setIsPlay(true));
    dispatch(setActiveSong(song));
  }

  return (
    <article 
    className="flex flex-col  p-4 bg-[#080808] rounded-xl cursor-pointer hover:bg-gray-900 group"
    onClick={handleOnClick}
    >
      <div className="">
        <div className="">
          <FaPlay className="hidden" />
          <FaPause className="hidden" />
        </div>
        <Image
          alt="cover_image"
          src={song.track.images.coverart}
          width={150}
          height={150}
          className="mx-auto rounded-lg "
        />
      </div>
      <div className="mt-5">
        <h2 className="truncate text-sm text-white font-semibold">
          {song.track.title}
        </h2>
        <p className="truncate text-xs text-white font-extralight py-4 ">
          {song.track.subtitle}
        </p>
      </div>
    </article>
  );
};

export default SongCard;
