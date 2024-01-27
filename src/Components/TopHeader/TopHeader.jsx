import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const TopHeader = () => {
    const [user, setUser] = useUser();
    const logout = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(() => setUser(null));
    }

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
                    {user ? (
                        <button className="btn btn-outline-primary me-2 btn-sm" onClick={logout}>Logout</button>
                    ) : (
                        <Link to='/authentication' className="btn btn-outline-primary me-2 btn-sm">Login/Create Account</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;