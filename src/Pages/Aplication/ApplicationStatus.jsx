import CommonBanner from "../../Components/CommonBanner/CommonBanner";

const ApplicationStatus = () => {
    return (
        <>
            <CommonBanner title="Application Status" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 display-6 text-center py-3">
                        Your Status
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-lg btn-outline-primary mb-3">Application of Salymbekov</button>
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
        </>
    );
};

export default ApplicationStatus;