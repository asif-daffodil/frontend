import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";


const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.user) {
            navigate('/login');
        }
    }, [auth.user]);

    return children;
};

export default RequireAuth;