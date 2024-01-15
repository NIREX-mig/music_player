"use client";

import SongCard from "@/components/SongCard";
import { useGetSongsBySearchQuery , useGetSongQuery  } from "@/redux/shazam/shazam";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  // const { searchValue } = useSelector((state) => state.search);
  // console.log(data.tracks.hits[1].track.subtitle)
  const {data, isFetching , error } = useGetSongQuery();

  
  return (
    <div className="flex flex-col p-5  ">
      <h3 className="text-2xl font-semibold">Search Results</h3>
      <div className="flex p-3 gap-3">
        {data?.tracks.hits?.map((song, index) => {
          return <SongCard 
                    key={song.track.key} 
                    song={song} 
                    index={index}
                  />;
        })}
      </div>
    </div>
  );
}
