import Image from "next/image"


const SongCard = () => {
  return (
    <article className="flex flex-col w-[191px] hover:bg-[#141414]  p-4 bg-[#080808] h-[270px] rounded-xl">
      <div className="" >
        <Image
          alt="cover_image"
          src="/songimg.jpg"
          width={190}
          height={190}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="mt-3">
        <h2 className="text-sm text-gray-300 font-semibold">Daily Mix 1</h2>
        <p className="text-xs font-extralight mt-2 "> yo yo honey shing and diven and more </p>
      </div>
      
    </article>
  )
}

export default SongCard
