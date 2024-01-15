"use client";
import { setIsMenuOpen } from "@/redux/features/globalSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import SearchBar from "./SearchBar";

const MobileNav = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.global);
  const pathname = usePathname();

  return (
    <header className="xl:hidden  lg:hidden md:hidden sm:hidden flex justify-between items-center p-3 w-full rounded-lg sticky top-0 backdrop-blur-lg bg-white/15 h-14">
      <nav className="flex items-center"> 
        logo

      {pathname === "/search" && (
          <SearchBar/>
        )}
      </nav>
      <nav>
        <GiHamburgerMenu
          onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
          className="w-7 h-7 cursor-pointer hover:fill-black"
        />
      </nav>
      {isMenuOpen && (
        <div className="fixed flex flex-col justify-between top-14  right-0 z-50 w-56 h-[565px] bg-white/15 rounded-lg p-6 text-black ">
          <div>
            <Link href="/" className="flex p-2 hover:bg-white hover:rounded-lg">
              <Image
                src="/assets/home.svg"
                width={25}
                height={25}
                alt="search_svg"
                className="invert"
              />
              <h2 className="text-xl font-semibold pl-2">home</h2>
            </Link>
            <Link href="/search" className=" flex p-2 hover:bg-white hover:rounded-lg">
              <Image
                src="/assets/search.svg"
                width={25}
                height={25}
                alt="search_svg"
                className="invert"
              />
              <h2 className="text-xl font-semibold pl-2">search</h2>
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
