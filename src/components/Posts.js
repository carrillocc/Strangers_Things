import React from "react";
import PostItem from "./PostItem";
import {Link} from 'react-router-dom'
import './Posts.css';

const Posts = ({ posts }) => {
    console.log("use these posts", posts);
    return (<>
        <Link to="/Posts/create" className="ui button">Create a Post</Link>
         <div className="posts-container">
            {posts.map((item) => {
                return  <PostItem key={item._id} posts={item} />
            })}
        </div>
    </>
    )
    
}



export default Posts