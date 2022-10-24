import React from "react";

const PostItem = ({posts}) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="centered aligned header">
                    {posts.author.username}
                </div>
                <div className="centered aligned description">
                    <p>
                        {posts.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostItem