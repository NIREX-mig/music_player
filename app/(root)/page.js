"use client";

import { useEffect, useState } from "react";
import { setIsMenuOpen } from "@/redux/features/globalSlice";
import SongCard from "@/components/SongCard";
import { useDispatch } from "react-redux";
import { setIsPlay } from "@/redux/features/playerSlice";

export default function Home() {
  const dispatch = useDispatch();
  
  const [data, setData] = useState();
  
  
  
  useEffect(() =>{
    dispatch(setIsMenuOpen(false));
    const jsonData = async () =>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sample.json`);
      const response = await res.json()
      setData(response);
    }
    jsonData();
  },[dispatch])

  return (
    <section className=" h-[89vh] overflow-y-scroll  ">
      <div className="p-3">
        <h4 className="font-bold text-2xl">Punjabi Old Songs </h4>
        <div className="lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid justify-center p-1 lg:gap-3 gap-2 ">
          {data?.tracks.hits?.map((song, index) => {
            return <SongCard key={index} setIsPlay={setIsPlay} song={song} index={index} />;
          })}
        </div>
      </div>

    </section>
  );
}
