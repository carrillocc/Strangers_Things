import React from "react";
import {useParams} from 'react-router-dom';
import PostItem from './PostItem'

const PostDetail = (props) => {
    const { posts } = props;
    const { postId } = useParams();

    const singlePost = posts.find((singlePost) => {
        const foundPost = singlePost._id == postId
        return foundPost
    });

    console.log(singlePost, "this is singlePost")

    if (!singlePost) {
        return (
            <p>Loading Post Details...</p>
        )
    } else {
        return (
            <PostItem posts={singlePost} />
        )
    }
    
};

export default PostDetail;