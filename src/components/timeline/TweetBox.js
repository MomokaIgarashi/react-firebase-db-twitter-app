import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // Add data in firebase database
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName:"Programming Tutorial",
      username:"Momoka_developer",
      verified:true,
      text:tweetMessage,
      avator:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image:tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            <Avatar />
            <input 
              value={tweetMessage}
              placeholder='What are doing now?' 
              type='text'
              onChange={(e) => setTweetMessage(e.target.value)}
            ></input>
        </div>
        <input className='tweetBox--imageInput' 
          value={tweetImage}
          placeholder='Input Image URL' 
          type='text'
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button 
          className='tweetBox--tweetButton' 
          type='submit' 
          onClick={sendTweet}
          >Post Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
