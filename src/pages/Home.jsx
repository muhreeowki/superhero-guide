import React from "react";
import { getSuper, getRandomSuper } from "../constants";
import { useState } from "react";

const Home = () => {
  const [searched, setSearched] = useState(false);
  const [hero, setHero] = useState({});
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    if (searchValue) {
      setHero(getSuper(searchValue));
    } else {
      setHero(getRandomSuper());
    }
    setSearched(true)
    console.log(hero);
  };

  return (
    <>
      {/* // SEARCH BOX AND SEARCH BUTTONS */}
      <div className="w-full flex flex-row items-center justify-center bg-[#3a3a3a] border border-none px-7 py-4 shadow-lg">
        <div className="flex flex-row justify-center gap-2 w-full max-w-7xl">
          {/* Search box */}
          <input
            className="w-[60%] sm:w-[40%] outline-none text-sm border border-[#a0a0a0] focus:border-white rounded-md bg-transparent text-[#a0a0a0] focus:text-white p-3"
            id="searchInput"
            type="text"
            placeholder="Hero name..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* Search Button */}
          <div className="flex flex-row itmes-center gap-2 w-fit">
            <button
              className="duration-200 bg-[#292929] hover:bg-[#e7e7e7] text-[#b1b1b1] hover:text-black text-xs sm:text-sm outline-none rounded-md py-2 px-3"
              onClick={handleSearch}
            >
              Search
            </button>
            {/* Random Super Button */}
            <button
              className="duration-200 bg-[#292929] hover:bg-[#e7e7e7] text-[#b1b1b1] hover:text-black text-xs sm:text-sm outline-none rounded-md py-2 px-3"
              onClick={handleSearch}
            >
              Random Superhero
            </button>
          </div>
        </div>
      </div>
      {/* // Card Container */}
      <section className="w-full grid ">
        
      </section>
    </>
  );
};

export default Home;
