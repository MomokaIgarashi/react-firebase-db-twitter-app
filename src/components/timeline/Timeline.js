import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from "../../firebase"
import {collection, getDocs} from "firebase/firestore";

function Timeline() {

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((doc) => doc.data()));
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
        <Post 
          displayName="Programming Tutorial"
          username="momoka_developer"
          verified={true}
          text="first tweet"
          avator="http://shincode.info/wp-content/uploads/2021/12/icon.png"
          image="https://source.unsplash.com/random"
        />
    </div>
  )
}

export default Timeline
