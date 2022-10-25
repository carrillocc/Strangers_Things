import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {createPost} from "../api/api";

const PostsCreateForm = ({token, setPosts}) => {
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    return (<form className="ui form" onSubmit={async (event) => {
        event.preventDefault();

        const {error, post} = await createPost(token, title, description, price, location);


        console.log('post form onSubmit:', description);

        if (post) {
            setPosts((prevPosts) => [...prevPosts, post]);
            setDescription('');
            setPrice('');
            history.push('/Posts');
        } else {
            setErrorMessage(error);
        }

        
    }}>
        <h2>Post Create form...</h2>
        <div className="field">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" className="field" placeholder="Title of Post" required autoComplete="off" value={title} onChange={(event) => {setTitle(event.target.value);}}></input>
        </div>
        <div className="field">
            <label htmlFor="description">Description</label>
            <input name="description" type="text" className="field" placeholder="A description of the item" required autoComplete="off" value={description} onChange={(event) => {setDescription(event.target.value);}}></input>
        </div>
        <div className="field">
            <label htmlFor="price">Price</label>
            <input name="price" type="text" className="field" placeholder="Value of item" required autoComplete="off" value={price} onChange={(event) => {setPrice(event.target.value);}}></input>
        </div>
        
        <div className="field">
            <label htmlFor="location">Location</label>
            <input name="location" type="text" className="field" placeholder="Meet up Location" autoComplete="off" value={location} onChange={(event) => {setLocation(event.target.value);}}></input>
        </div>

        {errorMessage ? <p className="ui negative message">{errorMessage}</p> : null}

        <button type="submit" className="ui button">Create</button>

    </form>
    )
};

export default PostsCreateForm;