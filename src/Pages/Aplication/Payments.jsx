import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";


const Payments = () => {
    return (
        <>
            <CommonBanner title="Payments" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <AppBreadcrumb />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payments;