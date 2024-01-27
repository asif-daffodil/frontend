import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TopHeader = () => {
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
                    <Link to='/authentication' className="btn btn-link btn-sm text-decoration-none ">Login/Create Accounts</Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;