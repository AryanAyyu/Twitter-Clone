import React from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from './Post';

function Feed(){


    return(
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox/>
            {/* Post */}            
            
            <Post
            displayName="Aryan Srivastava"
            username="Aryan_Ayyu"
            verified={true}
            text="YOO ITS WORKING"
            avatar="https://storage.pixteller.com/designs/designs-images/2017-09-21/09/twitter-profile-picture-avatar-1-59c3626d82bb3.png"
            image="https://i.gifer.com/origin/80/805906fe20711f41cd45647e2f4009d3_w200.webp"
            />
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

        </div>
    );
}

export default Feed;