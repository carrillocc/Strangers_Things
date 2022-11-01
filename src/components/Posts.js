import React from "react";
import PostItem from "./PostItem";
import {Link} from 'react-router-dom';
import { deletePost } from "../api/api";
import './Posts.css';

const Posts = ({ posts, setPosts, token }) => {
    console.log("use these posts", posts);

    const handleDeleteClick = async (postId) => {
        await deletePost(token, postId);
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId)
        );
    };
    
    return (<>
        <Link to="/Posts/create" className="ui button">Create a Post</Link>
         <div className="posts-container">
            {posts.map((item) => {
                return (  
                    <PostItem key={item._id} posts={item} >
                    {
                        item.isAuthor ? (
                        <div className="right floated aligned header">My Post</div> ) : null
                    }
                    {
                        item.isAuthor ? (
                        <button 
                            onClick={(() => handleDeleteClick(item._id))} className="negative ui button left floated">Delete</button> ) : null
                    }
                    </PostItem>
                );
            })}
        </div>
    </>
    )
    
}



export default Posts