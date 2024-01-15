import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa";


const SongCard = ({ song , index }) => {
  return (
    <article className="flex flex-col w-[180px]   p-4 bg-[#080808] h-[270px] rounded-xl cursor-pointer hover:bg-gray-900 group">
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
        <p className=" text-xs text-white font-extralight py-4 ">
          {song.track.subtitle}
        </p>
      </div>
    </article>
  );
};

export default SongCard;
