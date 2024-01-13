import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

const Sidebar = () => {
  return (
    <aside className="sm:flex flex-col w-[25%]  h-[98vh] rounded-lg mt-2 ml-1 hidden">
      <section className="bg-[rgb(16,16,16)] h-[35%] rounded-lg mx-1 p-2">
        <Link href="/" className="flex p-2 hover:text-gray-300">
          <Image src="/assets/home.svg" width={25} height={25} alt="home_svg" />
          <h2 className="text-lg font-bold pl-3">Home</h2>
        </Link>
        <Link
          href="/search"
          className="flex p-2 hover:text-gray-300 hover:fill-black"
        >
          <Image
            src="/assets/search.svg"
            width={25}
            height={25}
            alt="search_svg"
          />
          <h2 className="text-lg font-bold pl-3">Search</h2>
        </Link>
      </section>

      <section className="bg-[#101010] h-[75%]  rounded-lg my-2 mx-1 p-2">
        search
      </section>

      <section className=" bg-[#101010] h-[22%]  rounded-lg mb-2 mx-1 p-5  ">
        <h2 className=" truncate text-sm font-mono mb-2 "> -- Devloped by NIrex -- </h2>
        <div className="flex justify-start h-8 mt-4 ">
          <Link href="https://www.instagram.com/nirex_akay/">
            <FaInstagram className="w-7 h-7 hover:cursor-pointer hover:fill-red-600 mx-2 " />
          </Link>
          <Link href="">
            <TiSocialLinkedin className="w-8 h-8 hover:cursor-pointer hover:fill-blue-700 mx-2 " />
          </Link>
          <Link href="https://github.com/NIREX-mig">
            <TiSocialGithub className="w-8 h-8 hover:cursor-pointer hover:invert mx-2 " />
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
