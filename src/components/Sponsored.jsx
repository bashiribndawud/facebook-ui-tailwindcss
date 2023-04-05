import React from 'react'

const Sponsored = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer rounded relative p-2">
        <img
          src="https://t3.ftcdn.net/jpg/01/55/59/44/240_F_155594414_ZLNDEgVlBMwK7LfYUxwWOhbcNzkq6tvV.jpg"
          className="w-[9rem]"
          alt=""
        />
        <div className="">
          <h5 className="font-semibold">New Launch</h5>
          <h5 className="font-semibold">Special Deal</h5>
          <p className='text-gray-400 text-sm'>ng.oraimo.com</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white border shadow-lg absolute right-3 top-3 z-10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                      </svg></div>
      </div>
    </>
  );
}

export default Sponsored