


import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


const LogoutBtn = () => {
    const auth = useAuth();
    const navigate = useNavigate();


    const logout = () => {
        fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(() => {
            auth.logout();
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