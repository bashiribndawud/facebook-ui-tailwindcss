import React from 'react'
import Profile from "../assets/Bashir.JPG"
const NewMessage = ({ setShowMessage, setShowOptions }) => {
    function handleShowMessage() {
        setShowMessage(false)
        setShowOptions(false)
    }
  return (
    <>
      <div className="absolute right-24 bottom-8 w-80 h-[30rem] z-10 bg-white rounded-lg shadow-md flex flex-col">
        <div className="top flex flex-row items-center justify-between p-2">
          <h4 className="font-semibold text-sm">New Message</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-gray-400 rounded-full hover:text-blue-500 hover:cursor-pointer hover:bg-gray-100"
            onClick={handleShowMessage}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form
          action=""
          className="my-4 border-b border-gray-200 flex items-center space-x-2 pb-4 px-2"
        >
          <label htmlFor="search">To:</label>
          <input
            type="text"
            id="search"
            className="w-full bg-transparent border-white outline-white focus:border-transparent focus:outline-transparent p-3"
          />
        </form>
        <div className="p-4 shadow-lg h-auto relative">
          <p className="text-blue-500 px-6  h-full w-fit">Suggested</p>
          <div className="absolute left-0 bottom-0 w-36 border-4 border-blue-500"></div>
        </div>
        <div
          className="w-full h-full overflow-y-auto flex flex-col space-y-1"
          id="newMessage"
        >
          <h4 className="text-gray-500 text-lg font-bold mx-2 my-2">
            More people
          </h4>
          <div className="flex items-center space-x-2 px-4 hover:bg-gray-100 ml-2 py-1 rounded-l-lg hover:cursor-pointer">
            <img src={Profile} className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col">
              <p className="text-gray-500">DS Takalafis</p>
              <span className="truncate text-gray-400">
                1 mutual friend: Salihu Salihu
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 hover:bg-gray-100 ml-2 py-1 rounded-l-lg hover:cursor-pointer">
            <img src={Profile} className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col">
              <p className="text-gray-500">DS Takalafis</p>
              <span className="truncate text-gray-400">
                1 mutual friend: Salihu Salihu
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 hover:bg-gray-100 ml-2 py-1 rounded-l-lg hover:cursor-pointer">
            <img src={Profile} className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col">
              <p className="text-gray-500">DS Takalafis</p>
              <span className="truncate text-gray-400">
                1 mutual friend: Salihu Salihu
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 hover:bg-gray-100 ml-2 py-1 rounded-l-lg hover:cursor-pointer">
            <img src={Profile} className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col">
              <p className="text-gray-500">DS Takalafis</p>
              <span className="truncate text-gray-400">
                1 mutual friend: Salihu Salihu
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 hover:bg-gray-100 ml-2 py-1 rounded-l-lg hover:cursor-pointer">
            <img src={Profile} className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col">
              <p className="text-gray-500">DS Takalafis</p>
              <span className="truncate text-gray-400">
                1 mutual friend: Salihu Salihu
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMessage