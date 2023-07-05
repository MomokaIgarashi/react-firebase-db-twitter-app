import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--searchIcon'/>
            <input placeholder='Search keywords' type='text'/>
        </div>
        <div className='widgets--widgetContainer'>
            <h2>What are you doing?</h2>
            <TwitterTweetEmbed tweetId={"1475764828208009220"}/>
            <TwitterTimelineEmbed 
                sourceType='profile' 
                screenName='Shin_Engineer'
                options={{height: 400}}
            />
            <TwitterShareButton
                url={'https://facebook.com/saurabhnemade'}
                options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
        </div>
    </div>
  )
}

export default Widgets
