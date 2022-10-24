import React, {useState} from "react";
import {registerUser} from "../api/api";

const AccountForm = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");


    const onSubmitHandler = async(event) => {
        event.preventDefault();
        try {
            const {data} = await registerUser(username, password)
         } catch(error) {
            console.error(error)
         }
    };


    return (
        <form className="ui form" onSubmit={onSubmitHandler}>
            <h1>Sign Up</h1>
            <div className="field">
                <label>Username</label>
                <input type="text" value={username} placeholder="username" minLength="3" required onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" value={password} placeholder="password" minLength="8" required onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button className="ui button" type="submit">Sign Up</button>
        </form>
    )
}

export default AccountForm