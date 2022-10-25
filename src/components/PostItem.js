import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({posts}) => {
    console.log(posts, "IN ITEMS");
    return (
        <div className="ui card">
            <div className="content">
                <div className="left floated aligned header">
                    User: {posts.author.username}
                </div>
                <div className="right floated aligned header">
                    {posts.isAuthor ? <span>My Post</span> : null}
                </div>
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
            </div>
        </div>
    )
}

export default PostItem