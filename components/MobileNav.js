"use client";
import { setIsMenuOpen } from "@/redux/features/globalSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./SearchBar";


const MobileNav = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.global);
  const pathname = usePathname();

  return (
    <header className="xl:hidden  lg:hidden md:hidden sm:hidden flex justify-between items-center p-3 w-full rounded-lg sticky top-0 backdrop-blur-lg bg-white/15 h-14">
      <nav className="flex items-center">
        <div >
          <Image alt="logo" src="/logo.png" width={120} height={120} priority />
        </div>

        {pathname === "/search" && <SearchBar />}
      </nav>
      <nav>
        <GiHamburgerMenu
          onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
          className="w-7 h-7 cursor-pointer hover:fill-black"
        />
      </nav>
      {isMenuOpen && (
        <div className="fixed flex flex-col justify-between top-14  right-0 z-50 w-56 h-72 bg-black/85 rounded-lg p-6 text-white ">
          <div>
            <Link
              href="/"
              className="group flex p-2 hover:bg-white hover:rounded-lg"
            >
              <AiFillHome className="group-hover:invert w-7 h-7" />
              <h2 className="text-xl font-semibold group-hover:text-black pl-2">
                home
              </h2>
            </Link>
            <Link
              href="/search"
              className="group flex p-2 hover:bg-white hover:rounded-lg"
            >
              <IoSearch  className="group-hover:invert w-7 h-7"/>
              <h2 className="text-xl font-semibold group-hover:text-black pl-2">
                search
              </h2>
            </Link>
          </div>

          <div className="">
            <h2 className=" truncate text-sm font-bold mb-2 ">
              {" "}
              -- Devloped by NIrex --{" "}
            </h2>
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
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileNav;
