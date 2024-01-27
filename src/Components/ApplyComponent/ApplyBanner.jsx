import ApplyBannerImg from "../../images/slides/homeSlide1.jpg";

const bannerBg = {
    backgroundImage: `url(${ApplyBannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const ApplyBanner = () => {
    return (
        <div className="container-fluid" style={bannerBg} >
            <div className="row py-5">
                <div className="col-md-12 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-1">Program</h1>
                                <p className="small">Any question or remarks? Just write us a message!</p>
                                <button className="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyBanner;