import React from "react";
import { Link } from "react-router-dom";


const PostItem = ({posts, headerElement, children }) => {
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

    

    return (
        <div className="ui card">
            <div className="content">
                <div className="left floated aligned header">
                    User: {posts.author.username}
                </div>
                {headerElement}  
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
                            <Link to={`/Posts/${posts._id}`}>View Post </Link>
                        </div>
                    </div>
                </div>
                {children}
                <div role="list" className="ui divided relaxed list" style={{color: '#444', clear: 'both' }}>
                {posts.messages.map((message) => {
                        return (
                            <div key={message._id} role="listitem" className="item">
                                <b>{message.fromUser}</b>
                                <p className="content">{message.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostItem