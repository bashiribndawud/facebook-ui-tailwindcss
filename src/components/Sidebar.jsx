import React from 'react'

const Sidebar = ({Icon, title}) => {
  return (
    <div className="flex flex-row">
        <Icon />
        <span className="font-semibold text-md">{title}</span>
    </div>
  )
}

export default Sidebar