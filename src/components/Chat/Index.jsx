import React from 'react'

const Index = () => {
  return (
    <>
      <div className="absolute top-16 w-[25rem] h-[88vh] right-7 sm:right-2 sm:top-[4.5rem]  rounded-lg shadow-lg bg-white  z-30 overflow-y-auto">
        <div className="flex items-center justify-between flex-row px-4 py-3">
          <h3 className="text-2xl font-bold">Chats</h3>
          <div className="flex items-center space-x-4">
            <div className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className='bg-gray-100 flex items-center mx-6 rounded-full px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2 text-gray-400">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
            </svg>
            <input type="text" name="" id="" placeholder='Search Messenger' className='w-full border-none outline-none bg-transparent focus:outline-none' />
        </div>
       
       <div className='flex space-x-4 items-center px-4 py-3'>
        <div className="text-blue-500 bg-blue-100 px-3 py-2 rounded-full w-20 text-center text-base font-bold hover:bg-blue-200 hover:cursor-pointer">Inbox</div>
        <div className=" px-3 py-2 rounded-full w-fit text-center text-base font-semibold hover:bg-gray-200 hover:cursor-pointer">Communities</div>
       </div>

       <div className="flex flex-col space-y-3 px-4">
            <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


             <div className='relative'>
                <div className='flex space-x-1 hover:bg-gray-100 py-2 px-2 rounded-lg hover:cursor-pointer'>
                    <div class="relative">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/04/44/53/99/240_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="" />
                        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Nafisat Badaru</h4>
                    <span className="text-gray-400 text-sm">Connect and share with customers or fans</span> 
                    </div>
                </div>
                <div className='absolute z-10 w-12 h-12 rounded-full top-2 right-4 bg-white border shadow-lg flex items-center justify-center hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

             
       </div>
      </div>
    </>
  );
}

export default Index