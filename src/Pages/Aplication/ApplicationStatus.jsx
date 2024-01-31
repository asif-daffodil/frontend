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
            </div>
        </>
    );
};

export default ApplicationStatus;