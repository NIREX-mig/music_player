import Image from "next/image";

const Header = () => {
  return (
    <section className=" flex justify-between w-full p-5 border-b border-black backdrop-blur-lg backdrop:filter-none">
      <div className="flex">
        <Image
          alt="left_svg"
          src="/assets/previous.svg"
          width={25}
          height={25}
          className="mx-3 box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full"
        />

        <Image
          alt="right_svg"
          src="/assets/next.svg"
          width={25}
          height={25}
          className="box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full"
        />
      </div>

      <div className="flex">
          
      </div>
    </section>
  );
};

export default Header;
