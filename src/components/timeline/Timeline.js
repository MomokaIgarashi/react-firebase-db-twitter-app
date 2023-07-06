import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from "../../firebase"
import {collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import { useState, useEffect } from "react";
import FlipMove from 'react-flip-move'

function Timeline() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy( "timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()))
    // });

    // get data on real-time
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
    
  }, []);

  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline--header'>
            <h2>Home</h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />

        {/* Post */}
        <FlipMove>
          {posts.map((post) => (
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avator={post.avator}
            image={post.image}
            />
            )
          )}
        </FlipMove>
    </div>
  )
}

export default Timeline
