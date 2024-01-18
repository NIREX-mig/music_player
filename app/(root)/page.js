"use client";

import { useEffect } from "react";
import { setIsMenuOpen } from "@/redux/features/globalSlice";
import SongCard from "@/components/SongCard";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(setIsMenuOpen(false));
  },[])


  return (
    <section className=" h-[89vh] overflow-y-scroll  ">
      <div className="p-5">
        <h4 className="font-bold text-2xl">Punjabi Old Songs </h4>
        <div className="xl:grid-cols-5 md:grid-cols-3 flex flex-wrap justify-center p-5 md:justify-start gap-3 ">
          {/* {data?.tracks.hits?.map((song, index) => {
            return <SongCard key={song.track.key} song={song} index={index} />;
          })} */}
        </div>
      </div>

    </section>
  );
}
