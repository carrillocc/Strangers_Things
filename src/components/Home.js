import React from "react";

const Home = ({guest}) => {
    return (
        <>
            <h1>Welcome to the Stanger's Things App</h1>
            {guest && <h3>You are logged in as: {guest} </h3>}
        </>
    )
}

export default Home