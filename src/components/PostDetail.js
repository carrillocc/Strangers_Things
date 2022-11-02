import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import PostItem from './PostItem'

const PostDetail = (props) => {
    const { posts } = props;
    const { postId } = useParams();
    const [message, setMessage] = useState('');

        console.log(message)
    
    const singlePost = posts.find((singlePost) => {
        const foundPost = singlePost._id == postId
        return foundPost
    });

    if (!singlePost) {
        return (
            <p>Loading Post Details...</p>
        )
    }
        
    return (<>
        <PostItem posts={singlePost} />
        <form>
            <input type="text" placeholder="New Comment"
                value={message}
                onChange={(event) => setMessage(event.target.value)} />
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

export default PostDetail;