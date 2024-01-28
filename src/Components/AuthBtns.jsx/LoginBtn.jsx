import { Link } from "react-router-dom";

const LoginBtn = () => {
    return (
        <>
            <Link to='/authentication' className="btn btn-outline-primary me-2 btn-sm">Login/Create Account</Link>
        </>
    );
};

export default LoginBtn;