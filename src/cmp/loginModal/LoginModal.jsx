import { useContext, useState } from "react";
import "./loginModal.scss";
import { AuthContext } from "../../context/AuthContext";



const LoginModal = () => {
    const [user, setUser] = useState({
        username: '',
        userType: '',
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        const { id, value } = e.target || {};
        setUser((prev) => ({ ...prev, username: value }));
    };

    const handleClick = (userType) => {
        setUser((prev) => {
            const updatedUser = { ...prev, userType: userType };
            dispatch({ type: "LOGIN_SUCCESS", payload: updatedUser });
            return updatedUser;
        });
    };

    
    
    console.log(user);
    return (
        <div className="loginModal">
            <h1>Log In</h1>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Username"
                id="username"
                value={user.username}
            />
            <button className="btn" onClick={() => handleClick("Mentor")}>Mentor</button>
            <button onClick={() => handleClick("Student")}>Student</button>
        </div>

    );
};

export default LoginModal;