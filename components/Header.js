"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className="hidden xl:flex lg:flex md:flex sm:flex justify-between w-full  sticky top-0 backdrop-blur-sm ">
      <div className="flex">
        <div className="flex py-5 pl-5">
          <Image
            alt="left_svg"
            src="/assets/previous.svg"
            width={25}
            height={25}
            className="mr-3 box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full"
          />

          <Image
            alt="right_svg"
            src="/assets/next.svg"
            width={25}
            height={25}
            className="box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full"
          />
        </div>
        {pathname === "/search" && (
          <SearchBar/>
        )}
      </div>

      <div className="flex p-3">
        <div className="my-auto">
          <button type="button" className="text-white pr-5"
          >
            Sign up
          </button>
        </div>
        <div className="my-auto ">
          <button
            type="button"
            className="text-black bg-white font-bold  text-sm px-5 rounded-full py-3  "
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
