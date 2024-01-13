"use client";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SongCard from "@/components/SongCard";
import {useState } from "react";




export default function Home() {

  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);

  return (
    <section className="h-[87%] overflow-y-scroll  ">
      <h4 className="font-bold text-3xl px-5 py-3">Big Hits!</h4>
      <button
        onClick={() => {
          setMusicPlayerOpen(!musicPlayerOpen);
        }}
      >
        {" "}
        open
      </button>
      <div className="xl:grid-cols-5 md:grid md:grid-cols-3 flex flex-wrap justify-center p-5 md:justify-start gap-7 ">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>

      <div
        className={`w-full md:w-[79vw] z-[500] fixed bottom-0 duration-500  ${
          !musicPlayerOpen ? " translate-y-20" : ""
        } `}
      >
        <MusicPlayer />
      </div>
    </section>
  );
}
