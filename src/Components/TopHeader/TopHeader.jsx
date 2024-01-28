import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authBtn } from "../../hooks/checkAuth";
import { useSignals } from "@preact/signals-react/runtime";


const TopHeader = () => {
    useSignals();

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
                    <button className="btn btn-outline-primary me-2 btn-sm">Truck your application</button>
                    {authBtn.value}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;