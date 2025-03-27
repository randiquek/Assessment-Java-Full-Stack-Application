import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Logout() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );

}