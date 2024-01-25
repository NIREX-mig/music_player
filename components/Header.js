"use client";

import { usePathname,useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLeft =() =>{
    router.back();
  }
  const handleRight =() =>{
    router.forward();
  }

  return (
    <section className="hidden xl:flex lg:flex md:flex sm:flex justify-between w-full  sticky top-0 backdrop-blur-sm ">
      <div className="flex">
        <div className="flex py-5 pl-5">
        <MdOutlineKeyboardArrowLeft onClick={handleLeft} size={25} className="mr-3 box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full" />
            
        <MdOutlineKeyboardArrowRight onClick={handleRight} size={25} className="box-content hover:cursor-pointer hover:invert bg-[#101010] p-1 rounded-full" />       
        </div>
        {pathname === "/search" && (
            <SearchBar />
        )}
      </div>

    </section>
  );
};

export default Header;
