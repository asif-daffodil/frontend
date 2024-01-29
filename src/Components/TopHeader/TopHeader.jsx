import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../AuthBtns.jsx/LoginBtn";
import LogoutBtn from "../AuthBtns.jsx/LogoutBtn";
import { useAuth } from "../../hooks/auth";


const TopHeader = () => {
    const auth = useAuth();
    const navigate = useNavigate();

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
                    <button className="btn btn-outline-primary me-2 btn-sm" onClick={goToApplication} >Truck your application</button>
                    {auth.user || <LoginBtn />}
                    {auth.user && <LogoutBtn />}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;