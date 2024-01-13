"use client";

import SongCard from "@/components/SongCard";
import { useGetSongsBySearchQuery } from "@/redux/shazam/shazam";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "@/constant/sample";

export default function Search() {
  // const { searchValue } = useSelector((state) => state.search);
  console.log(data.tracks.hits[1].track.subtitle)

  return (
    <div className="flex flex-col p-5  ">
      <h3 className="text-2xl font-semibold">Search Results</h3>
      <div className="flex p-3 gap-3">
        {data?.tracks.hits?.map((hit, i) => {
          return <SongCard 
                    key={i} 
                    title={hit[i]?.track.title} 
                    subtitle={hit[i]?.track.subtitle}
                  />;
        })}
      </div>
    </div>
  );
}
