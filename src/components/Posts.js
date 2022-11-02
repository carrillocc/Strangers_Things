import React, {useEffect, useState} from "react";
import PostItem from "./PostItem";
import {Link} from 'react-router-dom';
import { deletePost } from "../api/api";
import './Posts.css';

const Posts = ({ posts, setPosts, token }) => {
    // console.log("use these posts", posts);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);


    useEffect(() => {

        if (searchTerm) {

            const searchTerms = searchTerm.toLowerCase().trim().split(' ');
            const filtered = posts.filter((postObject) => {
                
                const filterableValues = [
                    postObject.description,
                    postObject.location
                ];

                for (let value of filterableValues) {
                    const valueLower = value.toLowerCase().trim();

                    for (let term of searchTerms) {

                        if (valueLower.length > 0 && term.length > 0 && valueLower.includes(term)) {
                            return true;
                    }
                }
            }
                return false;
            });
            setFilteredPosts(filtered)
        } else {
            setFilteredPosts(posts)
        }
    }, [searchTerm, posts]);

    const handleDeleteClick = async (postId) => {
        await deletePost(token, postId);
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId)
        );
    };
    
    return (<>

        <div className="ui icon input">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value)}} />
            <i className="search icon"></i>
        </div>

        <Link to="/Posts/create" className="ui button">Create a Post</Link>
         <div className="posts-container">
            {filteredPosts.map((item) => {
                return (  
                    <PostItem key={item._id} posts={item} headerElement={
                        item.isAuthor ? (
                        <div className="right floated aligned header">My Post</div> ) : null
                        }>
                    
                        {item.isAuthor ? (
                        <button 
                            onClick={(() => handleDeleteClick(item._id))} className="negative ui button left floated">Delete</button> ) : null}
                    
                    </PostItem>
                );
            })}
        </div>
    </>
    )
    
}



export default Posts