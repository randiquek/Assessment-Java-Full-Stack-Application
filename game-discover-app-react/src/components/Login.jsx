import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "./Header";
import '../styles/Login.css';



export default function Login() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const loginDetails = {
            username,
            password,
        };
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            setUser(data);
        }).catch((error) => {
            console.error("Error during login:", error);
            alert("Invalid username or password.");
        });
};

return (
    <div>
        <Header />
        <div className="form-container">
            <h2 className="login-header">Log In</h2>
            <form onSubmit={handleLogin} className="form-details">
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
                <button type="submit" className="submit-btn">Log In</button>
            </form>
        </div>
    </div>
);

}