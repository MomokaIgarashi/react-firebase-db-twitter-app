import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            <Avatar />
            <input placeholder='What are doing now?' type='text'></input>
        </div>
        <input className='tweetBox--imageInput' placeholder='Input Image URL' type='text'></input>
        <Button className='tweetBox--tweetButton' type='submit' >Post Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
