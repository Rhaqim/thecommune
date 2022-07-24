import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/restaurants?search=${search}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    if (search === "") {
      setResults([]);
    }
  }, [search]);

  return (
    // <div>
    //   <form action="" method="post">
    //     <div className="flex justify-between mt-4">
    //       <input
    //         type="text"
    //         name="search"
    //         className="w-full p-2 bg-transparent border border-gray-400 rounded-lg"
    //         placeholder="Search"
    //         onChange={e => setSearch(e.target.value)}
    //         value={search}
    //       />
    //       <button
    //         type="submit"
    //         onClick={handleSearch}
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
    //       >
    //         Search
    //       </button>
    //     </div>
    //   </form>
    // </div>

    
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
