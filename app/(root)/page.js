"use client";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SongCard from "@/components/SongCard";
import { useGetSongQuery } from "@/redux/shazam/shazam";
import { useState } from "react";

export default function Home() {
  const { data, isFetching, error } = useGetSongQuery();

  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);

  return (
    <section className=" h-[87%] overflow-y-scroll  ">
      <button
        onClick={() => {
          setMusicPlayerOpen(!musicPlayerOpen);
        }}
      >
        {" "}
        open
      </button>
      <div className="p-5">
        <h4 className="font-bold text-2xl">Best of Honey shingh</h4>
        <div className="xl:grid-cols-5 md:grid md:grid-cols-3 flex flex-col flex-wrap justify-center p-5 md:justify-start gap-7 ">
          {data?.tracks.hits?.map((song, index) => {
            return <SongCard key={song.track.key} song={song} index={index} />;
          })}
        </div>
      </div>

      <div
        className={`w-full md:w-[79vw] z-40 fixed bottom-0 duration-500  ${
          !musicPlayerOpen ? " translate-y-20" : ""
        } `}
      >
        <MusicPlayer />
      </div>
    </section>
  );
}
