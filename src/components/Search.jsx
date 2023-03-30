import React from 'react'

const Search = ({ setShowSearch }) => {
  return (
    <div className="absolute z-40 w-[20rem] h-[6rem] bg-white shadow-lg rounded-b-lg flex flex-col">
      <div className="flex flex-row space-x-2 my-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9 p-2 ml-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          onClick={() => setShowSearch(false)}
        >
          <path
            fill-rule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="flex items-center bg-gray-200 rounded-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className="border-none outline-none bg-transparent outline-transparent appearance-none"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <span className="mx-auto text-gray-400 py-4 text-sm">
        No recent searches
      </span>
    </div>
  );
};

export default Search