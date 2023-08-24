import React from 'react'
import ShortsItem from './ShortsItem'

const ShortsSection = () => {
  return (
    <div className="w-full h-auto pb-10">
    <div className="w-full h-auto  pt-3 pb-6">
      <>
        <button className="h-8 px-3 rounded-lg bg-white/20 text-sm">
          Latest
        </button>
        <button className="h-8 px-3 rounded-lg bg-white/20 text-sm ml-2">
          Popular
        </button>
        <div className="flex flex-row flex-wrap w-full">
          {new Array(20).fill(<ShortsItem />)}
        </div>
      </>
    </div>
  </div>
  )
}

export default ShortsSection