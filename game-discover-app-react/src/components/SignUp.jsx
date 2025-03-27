import React, {useState, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import '../styles/SignUp.css'


export default function SignUp() {
    const {setUser} = useContext(UserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            username,
            password,
            authority: "USER",
            createdAt: new Date().toISOString(),
        };

        fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw new Error(data.error);
                }
                console.log("Sign-up response:", data.message);
                alert(data.message);
                setUser({
                    username,
                    authority: "USER",
                });
                localStorage.setItem("authority", "USER");
                navigate("/user-profile/" + username);
            })
            .catch((error) => {
                console.error("Error during sign-up:", error.message);
                alert(error.message);
            });
    };

    return (
        <div>
            <Header/>
            <div className="form-container">
                <h2 className="sign-up-header">Sign Up</h2>
                <form className="form-details" onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="submit-btn" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );




}