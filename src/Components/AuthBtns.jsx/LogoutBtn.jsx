import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import useJwt from "../../hooks/useJwt";
import Cookies from 'js-cookie';


const LogoutBtn = () => {
    const jwt = useJwt();
    const auth = useAuth();
    const navigate = useNavigate();



    const logout = () => {
        fetch('https://api.smubd.org/api/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwt}`,
            },
        }).then(() => {
            auth.logout();
            Cookies.remove('jwt');
            Swal.fire({
                title: 'Success',
                text: 'You have been logged out',
                icon: 'success',
                timer: 1500,
                position: "top-end",
                showConfirmButton: false,
            });
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