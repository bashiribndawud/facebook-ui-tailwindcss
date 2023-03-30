import React from 'react'

const Index = () => {
  return (
    <>
      <div className="absolute top-16 w-[25rem] h-[88vh] right-7 sm:right-2 sm:top-[4.5rem]  rounded-lg shadow-lg bg-white  z-30 overflow-y-auto">
        <h3 className='p-2 font-bold text-3xl'>Create</h3>
        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Post</h4>
                <span className="text-gray-400 text-sm">Share a post on News Feed</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Story</h4>
                <span className="text-gray-400 text-sm">Share a photo or write something</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2 flex-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Room</h4>
                <span className="text-gray-400 text-sm">Video chat with anyone, on or off Facebook, without time limits.</span>
            </div>
        </div>
        <div className="border-b-2 border-gray-200 my-1"></div>
        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Page</h4>
                <span className="text-gray-400 text-sm">Connect and share with customers or fans</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Ad</h4>
                <span className="text-gray-400 text-sm">Advertise your business, brand or organisation.</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Group</h4>
                <span className="text-gray-400 text-sm">Connect with people who share your interests.</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Event</h4>
                <span className="text-gray-400 text-sm">Bring people together with a public or private event.</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 ml-2 hover:cursor-pointer rounded-l-lg hover:bg-gray-100 py-2 items-center'>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center ml-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Marketplace Listing</h4>
                <span className="text-gray-400 text-sm">Sell items to people in your community</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Index