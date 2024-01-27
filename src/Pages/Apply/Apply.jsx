import ApplyBanner from "../../Components/ApplyComponent/ApplyBanner";
import ApplyBanner2 from "../../Components/ApplyComponent/ApplyBanner2";
import ApplyBreadCrumbs from "../../Components/ApplyComponent/ApplyBreadCrumbs";

const Apply = () => {
    return (
        <div>
            <ApplyBanner />
            <ApplyBreadCrumbs />
            <ApplyBanner2 />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <h4 className="text-danger dispalay-5">Why apply to Selymbekov?</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-bg-dark">
                    <div className="col-md-4 text-center py-5">
                        <h5 className="display-6">Review</h5>
                        <p className="fs-4">name</p>
                    </div>
                    <div className="col-md-4 text-center py-5">
                        <h5 className="display-6">Review</h5>
                        <p className="fs-4">name</p>
                    </div>
                    <div className="col-md-4 text-center py-5">
                        <h5 className="display-6">Review</h5>
                        <p className="fs-4">name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;