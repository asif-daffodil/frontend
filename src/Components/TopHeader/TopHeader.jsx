import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../AuthBtns.jsx/LoginBtn";
import LogoutBtn from "../AuthBtns.jsx/LogoutBtn";
import { useAuth } from "../../hooks/auth";
import Cookies from "js-cookie";
import axios from "axios";
import { useQuery } from "react-query";


const TopHeader = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const { data } = useQuery("getUserRole", async () => {
        try {
            const response = await axios.get(`https://api.smubd.org/api/user`, {
                headers: { Authorization: `Bearer ` + Cookies.get('jwt') }
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    );

    const goToApplication = () => {
        navigate('/application');
    };

    return (
        <div className="container">
            <div className="row py-2">
                <div className="col-md-6">
                    <a href="" className="me-2">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="" className="text-danger">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
                <div className="col-md-6 text-end">
                    {data?.user?.role === "admin" && <button className="btn btn-outline-primary me-2 btn-sm" onClick={() => navigate('/admin/dashboard')}>Admin Panel</button>}
                    {data?.user?.role === "user" && <button className="btn btn-outline-primary me-2 btn-sm" onClick={goToApplication}>Truck your application</button>}
                    {auth.user[0] && <LogoutBtn /> || <LoginBtn />}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;