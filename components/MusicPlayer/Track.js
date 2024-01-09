import Image from "next/image";

const Track = () => {
  return (
    <div className="hidden lg:flex md:hidden justify-center items-center">
      <Image
        alt="trackImg"
        src="/songImg.jpg"
        width={70}
        height={700}
        className="rounded-full border border-black spin "
      />
      <div className="w-32 px-3 md:hidden lg:inline-block">
        <p className="truncate text-white text-sm font-medium " >najar lag jayegi</p>
        <p className="truncate text-white text-xs font-light ">najar lag jayegi</p>
      </div>
    </div>
  );
};

export default Track;
