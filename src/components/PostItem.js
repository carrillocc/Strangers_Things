import React from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

const PostItem = ({posts, setPosts, token}) => {
    console.log(posts, "IN ITEMS");

    // posts.messages = [
    //     {
    //         "_id": "5e8d1fd747b6ce0017600594",
    //         "content": "I really love this item.  Can I have it?",
    //         "post": "5e8d1f2539e7a70017a7c965",
    //         "fromUser": "Martha12345",
    //         "createdAt": "2020-04-08T00:50:31.402Z",
    //         "updatedAt": "2020-04-08T00:50:31.402Z",
    //         "__v": 0
    //     }
    // ];

    const handleDeleteClick = async (postId) => {
        await deletePost(token, postId);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
    }

    return (
        <div className="ui card">
            <div className="content">
                <div className="left floated aligned header">
                    User: {posts.author.username}
                </div>
                    {posts.isAuthor ? <div className="right floated aligned header">My Post</div> : null}
                <div className="centered aligned description">
                    <p>
                        <b>
                            Title: {posts.title}
                        </b>
                    </p>
                    <p>
                        <b>
                        Price: {posts.price}
                        </b>
                    </p>
                    <p>
                        Description: {posts.description}
                    </p>
                    <p>
                        Location: {posts.location}
                    </p>
                    <div className="extra content">
                        <div className="center aligned header">
                            <Link to="">View Item</Link>
                        </div>
                    </div>
                </div>
                <div role="list" className="ui divided relaxed list" style={{color: '#444'}}>
                    
                    {
                        posts.isAuthor && token ? <button onClick={(() => handleDeleteClick(posts._id))} className="negative ui button left floated">Delete</button> : null
                    }
                    

                    {/* {posts.messages.map((message) => {
                        return (
                            <div role="listitem" className="item">
                                <b>{message.fromUser}</b>
                                <p className="content">{message.content}</p>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default PostItem