import Image from "next/image";
import Link from "next/link";

const Sidebar = ({search}) => {
  return (
    <aside className="sm:flex flex-col w-[30%]  h-[98vh] rounded-lg mt-2 ml-1 hidden">
      <section className="bg-[rgb(16,16,16)] h-[35%] rounded-lg mx-1 p-2">
        <Link href="/" className="flex p-2 hover:text-gray-300">
          <Image src="/assets/home.svg" width={25} height={25} alt="home_svg"  />
          <h2 className="text-lg font-bold pl-3">Home</h2>
        </Link>
        <Link href="/search" className="flex p-2 hover:text-gray-300 hover:fill-black">
          <Image
            src="/assets/search.svg"
            width={25}
            height={25}
            alt="search_svg"
            className=""
          />
          <h2 className="text-lg font-bold pl-3">Search</h2>
        </Link>
      </section>
      <section className="bg-[#101010] h-[75%]  rounded-lg my-2 mx-1 p-2">
        {search}
      </section>
      <section className="bg-[#101010] h-[22%]  rounded-lg mb-2 mx-1 p-2">
        hello
      </section>
    </aside>
  );
};

export default Sidebar;
