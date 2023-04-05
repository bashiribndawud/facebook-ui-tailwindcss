import React from 'react'

const Contact = ({name, url}) => {
  return (
    <div className='flex items-center my-2'>
        <div class="relative ">
            <img class="w-10 h-10 rounded-full" src={url} className='w-9 h-9 object-cover rounded-full mr-3' alt="" />
            <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <p className='font-semibold'>{name}</p>
    </div>
  )
}

export default Contact