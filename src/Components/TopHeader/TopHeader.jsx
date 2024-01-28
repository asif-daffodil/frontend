import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authBtn } from "../../hooks/checkAuth";
import { useSignals } from "@preact/signals-react/runtime";
import { useNavigate } from "react-router-dom";


const TopHeader = () => {
    useSignals();
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
                    {authBtn.value}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;