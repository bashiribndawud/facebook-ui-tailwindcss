import React from 'react'

const Index = () => {
  return (
    <div className="absolute p-4 top-16 w-[25rem] h-[88vh] right-7 sm:right-2 sm:top-[4.5rem]  rounded-lg shadow-lg bg-white  z-30 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Notification</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8  hover:bg-gray-100 hover:cursor-pointer rounded-full"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div className="flex space-x-2 items-center py-3">
        <div className="text-blue-500 bg-blue-100 px-3 py-2 rounded-full w-20 text-center text-base font-bold hover:bg-blue-200 hover:cursor-pointer">
          All
        </div>
        <div className=" px-3 py-2 rounded-full w-fit text-center text-base font-semibold hover:bg-gray-200 hover:cursor-pointer">
          Unread
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">New</p>
        <a
          href=""
          className="p-2 text-blue-500 text-lg hover:bg-gray-200 rounded"
        >
          See all
        </a>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="relative">
          <div className="flex space-x-3 items-center hover:bg-gray-100 py-2 rounded-lg hover:cursor-pointer">
            <div class="relative">
              <img
                class="w-16 h-16 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUywMRmChEnsqiVDhBiBwyHyJ-HjwA9SxLQ&usqp=CAU"
                alt=""
              />
              <div className="p-1 bg-blue-500 rounded-full absolute bottom-0 left-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6  text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Taalib e Jannah posted in Salafi
              </h4>
              <span>
                <span className="font-semibold">Dawah</span>on Tuesday
              </span>
              <br />
              <span className="text-blue-500 text-sm font-semibold">
                19 hours ago
              </span>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-end"></div>
          </div>
          <div className="absolute z-10 w-12 h-12 rounded-full top-6 right-7 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer">
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Friend requests</p>
          <a
            href=""
            className="p-2 text-blue-500 text-lg hover:bg-gray-200 rounded"
          >
            See all
          </a>
        </div>

        <div className="relative">
          <div className="flex space-x-3 items-center hover:bg-gray-100 py-2 rounded-lg hover:cursor-pointer">
            <div class="relative">
              <img
                class="w-16 h-16 rounded-full object-cover"
                src="https://t3.ftcdn.net/jpg/02/08/85/82/240_F_208858271_VIIx4aZdsxMyBBUVJ69xBO2DP0d7FHLb.jpg"
                alt=""
              />
              <div className="p-1 bg-blue-500 rounded-full absolute bottom-0 left-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6  text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Adebayo Rasheed <span>sent you a</span>
              </h4>
              <span>friend request</span>
              <br />
              <span className="text-blue-500 text-sm font-semibold">
                a day ago
              </span>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-end"></div>
          </div>
          <div className="absolute z-10 w-12 h-12 rounded-full top-6 right-7 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer">
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
          </div>
        </div>

        <div className="relative">
          <div className="flex space-x-3 items-center hover:bg-gray-100 py-2 rounded-lg hover:cursor-pointer">
            <div class="relative">
              <img
                class="w-16 h-16 rounded-full object-cover"
                src="https://t3.ftcdn.net/jpg/02/08/85/82/240_F_208858271_VIIx4aZdsxMyBBUVJ69xBO2DP0d7FHLb.jpg"
                alt=""
              />
              <div className="p-1 bg-blue-500 rounded-full absolute bottom-0 left-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6  text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Adebayo Rasheed <span>sent you a</span>
              </h4>
              <span>friend request</span>
              <br />
              <span className="text-blue-500 text-sm font-semibold">
                a day ago
              </span>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-end"></div>
          </div>
          <div className="absolute z-10 w-12 h-12 rounded-full top-6 right-7 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer">
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
          </div>
        </div>

        <div className="relative">
          <div className="flex space-x-3 items-center hover:bg-gray-100 py-2 rounded-lg hover:cursor-pointer">
            <div class="relative">
              <img
                class="w-16 h-16 rounded-full object-cover"
                src="https://t3.ftcdn.net/jpg/02/08/85/82/240_F_208858271_VIIx4aZdsxMyBBUVJ69xBO2DP0d7FHLb.jpg"
                alt=""
              />
              <div className="p-1 bg-blue-500 rounded-full absolute bottom-0 left-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6  text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Adebayo Rasheed <span>sent you a</span>
              </h4>
              <span>friend request</span>
              <br />
              <span className="text-blue-500 text-sm font-semibold">
                a day ago
              </span>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-end"></div>
          </div>
          <div className="absolute z-10 w-12 h-12 rounded-full top-6 right-7 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer">
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
          </div>
        </div>

        <div className='relative'>
                    <div className='flex space-x-3 items-center hover:bg-gray-100 py-2 rounded-lg hover:cursor-pointer'>
                        <div class="relative">
                            <img class="w-16 h-16 rounded-full object-cover" src="https://t3.ftcdn.net/jpg/02/08/85/82/240_F_208858271_VIIx4aZdsxMyBBUVJ69xBO2DP0d7FHLb.jpg" alt="" />
                            <div className='p-1 bg-blue-500 rounded-full absolute bottom-0 left-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6  text-white">
                                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                        <h4 className="font-semibold text-lg">Adebayo Rasheed <span>sent you a</span></h4>
                        <span>friend request</span>
                        <br />
                        <span className="text-blue-500 text-sm font-semibold">a day ago</span> 
                        </div>
                        <div className='w-3 h-3 bg-blue-500 rounded-full justify-self-end'>
                        </div>
                    </div>
                    <div className='absolute z-10 w-12 h-12 rounded-full top-6 right-7 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
            </div>
      </div>
    </div>
  );
}

export default Index