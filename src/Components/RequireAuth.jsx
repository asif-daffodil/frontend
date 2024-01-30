import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";


const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (typeof auth.user[0] === 'undefined') {
            navigate('/login');
        }
    }, [auth.user[0]]);

    return children;
};

export default RequireAuth;