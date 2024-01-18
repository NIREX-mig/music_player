"use client";

import SongCard from "@/components/SongCard";
import Loading from "@/components/loading";
import { setIsMenuOpen } from "@/redux/features/globalSlice";
import { setIsPlay } from "@/redux/features/playerSlice";
import { useGetSongsBySearchQuery } from "@/redux/shazam/shazam";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.global);

  
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchValue);

  useEffect(() => {
    dispatch(setIsMenuOpen(false));
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-5 h-[89vh]">
      <h3 className="text-2xl font-semibold">Search Results</h3>
      <div className="flex flex-wrap p-3 gap-3 overflow-y-scroll">
        {data?.tracks?.hits?.map((song, index) => {
          return (
            <SongCard
              key={song.track.key}
              song={song}
              setIsPlay={setIsPlay}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
