
import { useContext } from "react";
import { authBtn, checkAuth } from "../../hooks/checkAuth";
import useUser from "../../hooks/useUser";
import LoginBtn from "./LoginBtn";
import { useSignals } from "@preact/signals-react/runtime";
import AuthContext from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";


const LogoutBtn = () => {
    useSignals();
    const [setUser] = useUser();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const logout = () => {
        fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(() => {
            auth.user = null;
            authBtn.value = <LoginBtn />;
            checkAuth.value = false;
            setUser(null);
            navigate('/login');
        });
    };

    return (
        <>
            <button className="btn btn-outline-primary me-2 btn-sm" onClick={logout}>Logout</button>
        </>
    );
};

export default LogoutBtn;