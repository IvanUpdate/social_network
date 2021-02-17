import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    <Post message = "Hi, How are you?" likes = "4"/>
                    <Post message = "It's my first post" likes = "5"/>
                </div>
            </div>
    );
}

export default MyPosts;