import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id : 1, message : "Hi, How are you?", likes : 12},
        {id : 1, message : "It's my first post", likes : 11},
        {id : 1, message : "Bla bla", likes : 1},
        {id : 1, message : "Da da", likes : 10},
    ];

    let postsElements = posts.map(post => <Post message = {post.message} likes = {post.likes} id = {post.id} />);

    return (
        <div class={classes.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;