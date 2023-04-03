import React from 'react'

const SidebarItems = ({title, icon}) => {
  return (
    <div className="flex flex-row space-x-2 items-center p-2 ml-2 hover:bg-gray-200 rounded-l-lg hover:cursor-pointer">
      <img src={icon} alt="" className=' w-7 h-7' />
      <p className='text-lg font-semibold'>{title}</p>
    </div>
  );
}

export default SidebarItems