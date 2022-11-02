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

    if (!singlePost) {
        return (
            <p>Loading Post Details...</p>
        )
    } else {
        return (<>
            <PostItem posts={singlePost} />
            <form>
                <input type="text" placeholder="New Comment" />
                <button type="submit">Comment</button>
            </form>
        </>);
    };

    // if (singlePost) {
    //     return (
    //         <PostItem posts={singlePost} />
    //     );
    // } else {
    //     return (
    //         <p>Loading Post Details...</p>
    //     )
    // }
    
};

export default PostDetail;