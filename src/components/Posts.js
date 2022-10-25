import React from "react";
import PostItem from "./PostItem";
import './Posts.css';

const Posts = ({ posts }) => {
    console.log("use these posts", posts);
    return (<>
        <button className="ui button">Create a Post</button>
         <div className="posts-container">
            {posts.map((item) => {
                return  <PostItem key={item._id} posts={item} />
            })}
        </div>
    </>
    )
    
}



export default Posts