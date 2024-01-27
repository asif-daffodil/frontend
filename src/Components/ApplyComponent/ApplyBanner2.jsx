import ApplyBannerImg from "../../images/SalymbekovUniversity.png";

const bannerBg = {
    backgroundImage: `url(${ApplyBannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const ApplyBanner2 = () => {
    return (
        <div className="container-fluid" style={bannerBg} >
            <div className="row py-5">
                <div className="col-md-12 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="display-3">Salymbekov University</h2>
                                <p className="text-bg-primary d-inline p-2 rounded">International faculty of medicine!</p>
                                <h3 className="display-2 text-primary fw-bolder ">
                                    REQUIREMENTS<br />
                                    & APPLICATION
                                </h3>
                                <button className="btn btn-outline-primary">Apply to Salymbekov</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyBanner2;