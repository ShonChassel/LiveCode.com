import { useState } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate();

    const Login = () => {
        navigate("/login");
    };
    const Register = () => {
        navigate("/register");
    };

    return (
        <div className="navbar">
            <span className="logo">Online Code</span>

            <div className="navItems">
                <button className="navButton" onClick={Register}>Register</button>
                <button className="navButton" onClick={Login}> Login </button>
            </div>
        </div>

    );
};

export default Navbar;