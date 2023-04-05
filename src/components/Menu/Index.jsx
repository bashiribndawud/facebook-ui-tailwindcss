import React from 'react'
import Book from '../../assets/book.png'
const Index = () => {
  return (
    <div className="absolute p-4 top-16 w-[40rem] h-[85vh] right-9 sm:right-9 sm:top-[4.1rem]  rounded-lg shadow-lg bg-gray-100  z-30 overflow-y-auto">
      <h3 className="font-bold text-2xl">Menu</h3>
      <div className="flex flex-row justify-between mt-2">
        <div className='bg-white shadow-lg h-full w-[23rem] rounded p-4 border overflow-y-auto'>
            <div className='bg-gray-100 flex items-center rounded-full px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2 text-gray-400">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
                <input type="text" name="" id="" placeholder='Search Messenger' className='w-full border-none outline-none bg-transparent focus:outline-none' />
            </div>

            <h4 className='text-xl font-semibold py-2'>Social</h4>

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  


            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

            <div className='flex gap-3 flex-row overflow-x-hidden p-1 hover:bg-gray-100 hover:cursor-pointer rounded'>
                <img src={Book} className='w-9 h-9' alt="" />
                <div>
                    <h5 className='font-semibold text-lg'>Stories</h5>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga.</p>
                </div>
            </div>  

        </div>

        <div className='bg-white shadow-lg h-full w-[14rem] rounded p-4 border'>
            <h4 className='text-xl font-bold '>Create</h4>
            <div className='flex flex-col'>
                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold">Post</p>
                </div>

                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold">Story</p>
                </div>

                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold">Room</p>
                </div>
                <hr className='my-2' />

                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold">Page</p>
                </div>

                 <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                    </svg>
                    </div>
                    <p className="text-lg font-semibold">Ad</p>
                </div>


                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                    </div>
                    <p className="text-lg font-semibold">Group</p>
                </div>

                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    <p className="text-lg font-semibold">Event</p>
                </div>

                <div className="flex space-x-3 items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md">
                    <div className="p-2 bg-gray-300 rounded-full  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold">Marketplace Listing</p>
                </div>





            </div>

        </div>
      </div>
    </div>
  );
}

export default Index