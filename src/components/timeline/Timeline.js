import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'


function Timeline() {
  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline--header'>
            <h2>Home</h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />

        {/* Post */}
        <Post />
    </div>
  )
}

export default Timeline
