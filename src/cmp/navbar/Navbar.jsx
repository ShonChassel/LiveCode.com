import { useContext, useState } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";
import { AuthContext } from "../../context/AuthContext";



const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const { user, dispatch } = useContext(AuthContext);


    const LogOut = () => {
        dispatch({ type: "LOGOUT" });
        setToggle(false)
        navigate(`/`);
    };

    console.log('user', user);
    return (
        <div className="navbar">
            <div className="logo">
            <span>Live
                <span>C</span>
                 ode</span>

            </div>

            {/* <div className="navItems">
                <button className="navButton" onClick={Register}>Register</button>
                <button className="navButton" onClick={Login}> Login </button>
            </div> */}
            <div className="navItems">
                {!user ? (
                    <button className="navLogin" onClick={() => setToggle(!toggle)}>
                        <img src="https://res.cloudinary.com/dirvusyaz/image/upload/v1701727779/user_ki8xsv.svg" alt="" />
                        Login
                    </button>
                ) : (
                    <div className="user-container">
                        <div>{user.username}</div>

                        <button className="navLogin" onClick={LogOut}>
                            Log out
                        </button>
                    </div>
                )}
            </div>
            {toggle && !user ? <LoginModal /> : ""}
        </div>

    );
};

export default Navbar;