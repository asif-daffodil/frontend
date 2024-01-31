import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/auth";
import { useQuery } from "react-query";

const Application = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const { isLoading, data } = useQuery('repoData', () =>
        axios.get('http://localhost:8000/api/checkpreaplication', { withCredentials: true }).then(response => response.data.message === 'You already have an application' ? navigate('/applicationStatus') : response.data
        ));

    useEffect(() => {
        if (!auth.user[0]) {
            navigate('/login');
        }
    }, [auth.user[0]]);

    return (
        <>
            <CommonBanner title="Your Application" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row py-5">
                    {isLoading ? <div className="col-md-12 text-center">Loading...</div> : (
                        <div className="col-md-12">
                            <h1 className="display-6 text-primary">Start Application</h1>
                            <div className="row">
                                <p className="small col-md-6">
                                    <span className="text-danger">Once</span> you have started an application, you can click on the application below to complete and submit it.If you have submitted an application, you can click on the application to check the status.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-lg btn-outline-primary mb-3" onClick={() => navigate('/startApplication')}>Application of Salymbekov</button>
                                    <table className="table border border-1 border-dark">
                                        <thead>
                                            <tr>
                                                <th colSpan="6" className="text-bg-primary">Your Applications Type</th>
                                                <th className="text-bg-primary">Status</th>
                                                <th className="text-bg-primary">Started</th>
                                                <th className="text-bg-primary">Submitted</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan="6">
                                                    You have not yet started an application using this account.
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Application;