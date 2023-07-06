import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from "../../firebase"
import {collection, getDocs} from "firebase/firestore";
import { useState } from "react";

function Timeline() {

  const [posts, setPosts] = useState([]);

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    setPosts(querySnapshot.docs.map((doc) => doc.data()))
  });

  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline--header'>
            <h2>Home</h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />

        {/* Post */}
        {posts.map((post) => (
          <Post 
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avator={post.avator}
          image={post.image}
        />
        )
          
        )}
    </div>
  )
}

export default Timeline
