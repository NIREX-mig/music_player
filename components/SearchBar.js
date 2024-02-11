"use client";
import Image from "next/image";
import { setSearchValue } from "@/redux/features/globalSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const debounceValue = useDebounce(search,800);

  useEffect(() => {
    dispatch(setSearchValue(debounceValue));
  }, [debounceValue]);

  return (
    <div className=" flex items-centerm justify-center items-center pl-2 z-10">
      <div className="flex justify-center items-center hover:bg-gray-700 hover:border-white hover:border  rounded-full bg-gray-700 ">
        <div className=" w-9 flex items-center ps-3">
          <Image
            src="/assets/search.svg"
            width={20}
            height={20}
            alt="search_svg"
          />
        </div>
        <input
          type="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          className="truncate block py-4 pr-4 text-sm text-white rounded-full bg-gray-700 outline-none "
          placeholder="search any things "
        />
      </div>
    </div>
  );
};

export default SearchBar;
