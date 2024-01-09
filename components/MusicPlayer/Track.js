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
      <div className="px-3 md:hidden lg:inline-block">
        <p className="text-sm font-medium " >najar lag jayegi</p>
        <p className="text-xs font-light ">najar lag jayegi</p>
      </div>
    </div>
  );
};

export default Track;
