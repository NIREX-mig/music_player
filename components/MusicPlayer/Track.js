import Image from "next/image";

const Track = ({isPlay,activeSong}) => {
  return (
    <div className="lg:flex Lg:justify-center items-center lg:relative absolute left-0 ">
      <Image
        alt="trackImg"
        src={activeSong?.track?.images?.coverart}
        width={70}
        height={70}
        priority={true}
        className={`hidden lg:block rounded-full border border-black ${isPlay && "spin"}`}
      />
      <div className="lg:w-36 md:w-28  w-28 px-3">
        <p className="truncate text-white text-sm font-medium " >{activeSong?.track?.title}</p>
        <p className="truncate text-white text-xs font-light ">{activeSong?.track?.subtitle}</p>
      </div>
    </div>
  );
};

export default Track;
