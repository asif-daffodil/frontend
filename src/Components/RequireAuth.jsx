import { useContext, useEffect } from "react";
import AuthContext from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";


const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.checkAuth) {
            navigate('/login');
        }
    }, [auth.checkAuth]);

    return children;
};

export default RequireAuth;