import Image from "next/image";

const SongCard = ({song, index}) => {
  return (
    <article className="flex flex-col w-[180px]   p-4 bg-[#080808] h-[250px] rounded-xl">
      <div className="">
        <Image
          alt="cover_image"
          src="/songimg.jpg"
          width={150}
          height={150}
          className="mx-auto rounded-lg hover:bg-opacity-10"
        />
      </div>
      <div className="mt-3">
        <h2 className="truncate text-sm text-white font-semibold">{song.track.title}</h2>
        <p className="text-xs text-white font-extralight mt-2 ">{song.track.subtitle}</p>
      </div>
    </article>
  );
};

export default SongCard;
