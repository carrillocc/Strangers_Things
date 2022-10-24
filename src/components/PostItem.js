import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({posts}) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="centered aligned header">
                    {posts.author.username}
                </div>
                <div className="centered aligned description">
                    <b>
                        {posts.title}
                    </b>
                    <p>
                        {posts.description}
                    </p>
                    <b>
                        {posts.price}
                    </b>
                    <div className="extra content">
                        <div className="center aligned header">
                            <Link to="">View Location</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem