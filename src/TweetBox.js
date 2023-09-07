import React from "react";
import './TweetBox.css';
import { Avatar,Button } from "@mui/material";

function TweetBox(){
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://storage.pixteller.com/designs/designs-images/2017-09-21/09/twitter-profile-picture-avatar-1-59c3626d82bb3.png"/>
                <input placeholder="What's happening" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional : Enter image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}
export default TweetBox;