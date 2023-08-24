import React from 'react'

const ChannelsSectionItem = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[210px] h-[197px] mr-1 mb-6">
        <img src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="channel" className="w-[103px] h-[103px] object-cover rounded-full"/>
        <span className="text-sm font-semibold mt-1">Din Grogu</span>
        <span className="text-xs font-semibold text-[#aaa] mt-1">600K subscribers</span>
        <button className="w-[85px] h-8 bg-[#272727] text-white text-xs font-semibold rounded-2xl mt-2">Subscribe</button>
    </div>
  )
}

export default ChannelsSectionItem