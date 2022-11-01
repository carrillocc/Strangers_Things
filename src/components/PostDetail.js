import React from "react";
import {useParams} from 'react-router-dom';

const PostDetail = (props) => {
    const { postId } = useParams();

    return (
        `Post Details for id=${postId}`
    )
};

export default PostDetail;