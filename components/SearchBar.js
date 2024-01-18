"use client";
import Image from "next/image";
import { setSearchValue } from "@/redux/features/globalSlice";
import { useDispatch } from "react-redux";
import { useCallback, useState, useEffect } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      const context = true;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  const makeApiCall = (search) => {
    dispatch(setSearchValue(search));
  };

  const debounceSearch = useCallback(debounce(makeApiCall, 800), []);

  useEffect(() => {
    if (search) debounceSearch(search);
  }, [search]);

  return (
    <div className="flex items-centerm justify-center items-center pl-2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
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
          className="truncate block xl:w-80 md:w-64 w-44 p-4 ps-10 text-sm text-white rounded-full bg-gray-700 focus:outline-none focus:border focus:bg-gray-800 focus:border-white hover:bg-gray-800 hover:border-white hover:border "
          placeholder="search any things "
        />
      </div>
    </div>
  );
};

export default SearchBar;
