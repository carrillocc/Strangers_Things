import React, {useState, useEffect} from "react";
import { Home, Posts, AccountForm } from "./components"
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPosts, fetchGuest } from "./api/api";
import "./App.css"


const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token")||"");
    const [guest, setGuest] = useState(null);

    const history = useHistory()

    useEffect(() => {
        const getPosts = async () => {
            const {error, posts} = await fetchPosts();
           
            if (error) {
                console.error(error);
            }
            setPosts(posts);
        };
        getPosts();
    }, []);

    useEffect(() => {
        if (token) {
            const getGuest = async () => {
                const {username} = await fetchGuest(token);
                console.log('username', username);
                setGuest(username);
            };
            getGuest();
        }
    }, [token]);

    useEffect(() => {
        window.localStorage.setItem("token", token)
    }, [token])

    const logOut = () => {
        setToken("");
        setGuest(null);
        history.push("/");
    }

    return (
        <div className="container">
            <nav className="ui secondary menu">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/Posts">Posts</Link>
                <div className="right menu">
                    {token ? (
                        <button onClick={logOut} className="item">Log Out</button>
                    ): (
                        <>
                            <Link className="item" to="/account/login">Log In</Link>
                            <Link className="item" to="/account/register">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home guest={guest} />
                </Route>
                <Route className="item" path="/Posts">
                    <Posts posts={posts} />
                </Route>
                <Route className="item" path="/account/:action">
                    <AccountForm setToken={setToken} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;