import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post() {
  return (
    <div className='post'>
      <div className='post--avator'>
        <Avatar />
      </div>
      <div className='post--body'>
        <div className='post--header'>
            <div className='post--headerText'>
                <h3>Programming Hello</h3>
                <span className='post--headerSpecial'>
                    <VerifiedUser className="post--badge"/>
                    @Momoka_engineer
                </span>
            </div>
            <div className='post--headerDescription'>
                <p>React now</p>
            </div>
        </div>
        <img src="https://source.unsplash.com/random" alt='' />
        <div className='post--footer'>
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small'/>
            <FavoriteBorder fontSize='small'/>
            <PublishOutlined fontSize='small'/>
        </div>
      </div>
    </div>
  )
}

export default Post
