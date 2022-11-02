import React, {useState} from "react";
import {Redirect, useParams} from 'react-router-dom';
import {addComment} from '../api/api'
import PostItem from './PostItem'

const PostDetail = (props) => {
    const { token, posts } = props;
    const { postId } = useParams();
    const [messageText, setMessageText] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    
    const singlePost = posts.find((singlePost) => {
        const foundPost = singlePost._id == postId
        return foundPost
    });

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        //call api 
        const {success, error, message} = await addComment(token, postId, messageText);

        if (success) {
            setMessageText('');
            console.log('we successfully added a comment!')
        } else {
            setErrorMessage(error);
            console.log('failed to add a comment')
        }
    };

    if (!singlePost) {
        return (
            <p>Loading Post Details...</p>
        )
    }
        
    return (<>
        <PostItem posts={singlePost} />
        <form className="content-form" onSubmit={handleOnSubmit}>
            <input type="text" placeholder="New Comment"
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)} />
            <button type="submit">Comment</button>
            {errorMessage ?
            <p style={{color: 'red', backgroundColor: 'pink'}} >Operation Failed: {errorMessage}</p> : null}
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