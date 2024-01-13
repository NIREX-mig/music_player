import Image from "next/image";

const SongCard = ({title, subtitle}) => {
  return (
    <article className="flex flex-col w-[180px] hover:bg-[#141414]  p-4 bg-[#080808] h-[250px] rounded-xl">
      <div className="">
        <Image
          alt="cover_image"
          src="/songimg.jpg"
          width={190}
          height={190}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="mt-3">
        <h2 className=" text-sm text-white font-semibold">{title}</h2>
        <p className="text-xs text-white font-extralight mt-2 ">{subtitle}</p>
      </div>
    </article>
  );
};

export default SongCard;
