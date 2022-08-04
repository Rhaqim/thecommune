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
    <form>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 lg:w-[700px] text-sm text-gray-50 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Restaurants..."
          required
        />
        <button
          type="submit"
          className="text-black absolute right-2.5 bottom-2.5 bg-gray-100 hover:bg-[#A1A1A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 search-button"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
