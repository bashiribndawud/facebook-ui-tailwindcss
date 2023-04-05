import React from 'react'

const CreateRoom = () => {
  return (
    <div className="w-[90%] sm:w-[70%] h-[4rem] bg-white mt-5 shadow-lg flex flex-col rounded-lg p-3">
      <button className='border-2 border-purple-300 w-[10rem] flex items-center p-2 rounded-full gap-2'> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 text-gradient-to-r">
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
            <span className='text-blue-500 font-semibold'>Create Room</span>
      </button> 
    </div>
  );
}

export default CreateRoom