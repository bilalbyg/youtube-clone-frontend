import React from 'react'

const VideoPlayer = ({source}) => {
  return (
    <video
    className="w-[850px] h-[540px] flex-1"
    controls
    src={source}
  />
  )
}

export default VideoPlayer