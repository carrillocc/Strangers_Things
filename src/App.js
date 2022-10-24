import React, {useState, useEffect} from "react";
import { Home, Posts, AccountForm } from "./components"
import { Route, Switch, Link } from "react-router-dom";
import { fetchPosts } from "./api/api";
import "./App.css"


const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await fetchPosts()
                setPosts(result)
            } catch(error) {
                console.error(error)
            }
        };
        getPosts();
    }, []);

    return (
        <div className="container">
            <nav className="ui secondary menu">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/Posts">Posts</Link>
                <Link className="item" to="/account">Log In</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route className="item" path="/Posts">
                    <Posts posts={posts} />
                </Route>
                <Route className="item" path="/account">
                    <AccountForm />
                </Route>
            </Switch>
        </div>
    );
};

export default App;