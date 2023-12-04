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

        if (id === 'username') {
            setUser((prev) => ({ ...prev, username: value }));
        } else {
            setUser((prev) => ({ ...prev, userType: e }));
            dispatch({ type: "LOGIN_SUCCESS", payload: user });
        }
        

        console.log(user);
    };

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
            <button className="btn" onClick={() => handleChange("Mentor")}>Mentor</button>
            <button onClick={() => handleChange("Student")}>Student</button>
        </div>

    );
};

export default LoginModal;