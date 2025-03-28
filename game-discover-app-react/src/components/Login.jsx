import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/Login.css';



export default function Login() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const loginDetails = {
            username,
            password,
        };
        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Login failed");
            }
        }).then((data) => {
            console.log("Backend Response:", data);
            setUser({ userId: data.userId, username: data.username, firstName: data.firstName, lastName: data.lastName, authority: data.authority, createdAt: data.createdAt});
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify({ userId: data.userId, username: data.username, firstName: data.firstName, lastName: data.lastName, authority: data.authority, createdAt: data.createdAt }));
            if (data.authority === "ADMIN") {
                console.log("To Admin");
                navigate("/admin");
            } else {
                console.log("To User");
            navigate(`/user-profile/${data.username}`);
            }
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
        <Footer/>
    </div>
);

}