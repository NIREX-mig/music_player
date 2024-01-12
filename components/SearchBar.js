
import Image from "next/image"
const SearchBar = ({search, onChange}) => {
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
                onChange={onChange}
                autoComplete="off"
                className="truncate block xl:w-80 md:w-64 w-44 p-4 ps-10 text-sm text-white rounded-full bg-gray-700 focus:outline-none focus:border focus:bg-gray-800 focus:border-white hover:bg-gray-800 hover:border-white hover:border "
                placeholder="search any things "
              />
            </div>
          </div>
  )
}

export default SearchBar
