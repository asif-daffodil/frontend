import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";

const Application = () => {
    const navigate = useNavigate();
    return (
        <>
            <CommonBanner title="Your Application" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row py-5">
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
                                <table className="table border border-1 border-dark" cellPadding={10}>
                                    <tr className="text-bg-primary ">
                                        <th colSpan="6">Your Applications Type</th>
                                        <th>Status</th>
                                        <th>Started</th>
                                        <th>Submitted</th>
                                    </tr>
                                    <tr>
                                        <td colSpan="6">
                                            You have not yet started an application using this account.
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Application;