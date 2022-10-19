import React from "react";

const Posts = ({posts}) => {
    const data = ["hat", "shoe", "shirt", "shorts"]
    const elements = [<div>hat</div>, <div>shoe</div>, <div>shirt</div>]
    return (
        <React.Fragment>
            {
                data.map((item, index) => {
                    return (
                        <div>
                            {
                                item
                            }
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Posts