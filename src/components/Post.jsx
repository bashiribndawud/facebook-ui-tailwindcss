import React from 'react'

const Post = () => {
  return (
    <div className="w-[90%] sm:w-[70%] h-auto bg-white mt-5 mb-4 shadow-lg flex flex-col rounded-lg ">
      <div className="header flex flex-row justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full border-2 border-blue-500"
            style={{
              backgroundImage: `url('https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <h5 className="text-gray-600 text-sm font-bold">Lin Shen</h5>
            <span className="text-gray-400 text-xs">1h</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="body">
        <p className="text-gray-600 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          dignissimos voluptatibus accusamus nesciunt reprehenderit quod dolorem
          iste deleniti odit aliquid!
        </p>
        <img
          src="https://t4.ftcdn.net/jpg/02/06/37/81/240_F_206378199_4MIDCgkC0lIN2RpgeiQIP6J01CIOEOD8.jpg"
          alt=""
          className='w-full object-contain mb-3 '
        />
      </div>
      
      <div className='flex justify-evenly items-center border-t-2 border-b-2 mb-2 py-1'>
            <div className='flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer py-1 px-4 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <span className='text-gray-500'>Live video</span>
            </div>
            <div className='flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer py-1 rounded px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span className='text-gray-500'>Comment</span>
            </div>
            <div className='flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer py-1 px-4 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                <span className='text-gray-500 font-semibold'>Share</span>
            </div>
        </div>

        <div className='flex flex-row space-x-2 mx-5 py-3'>
            <div
            className="w-9 h-9 rounded-full border-2 border-gray-300"
            style={{
              backgroundImage: `url('https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

            <div className='bg-gray-100 flex items-center rounded-full flex-1 px-2'>
                <input type="text" name="" id="" placeholder='Write a comment' className='w-full border-none outline-none bg-transparent focus:outline-none' />
            </div>
        </div>


    </div>
  );
}

export default Post