import React from "react";
import PostItem from "./PostItem";


const Posts = ({ posts }) => {
    console.log("use these posts", posts);
    return (
        <div>
        {posts.map((item) => {
           return  <PostItem key={item._id} posts={item} />
        })}
    </div>
    )
    
}

// const Posts = (props) => {
//     const { posts } = props
//     console.log('this is posts', posts);

//     const data = ["hat", "shoe", "shirt", "shorts"]
//     const elements = [<div>hat</div>, <div>shoe</div>, <div>shirt</div>]

//     return (
//         <React.Fragment>
//             {
//                 data.map((item, index) => {
//                     return (
//                         <div>
//                             {
//                                 item
//                             }
//                         </div>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }

export default Posts