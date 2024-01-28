import bannerImg from "../../images/slides/homeSlide1.jpg";

const bannerBg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const CommonBanner = ({ title, subtitle }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12" style={bannerBg}>
                    <div className='container py-0 py-md-5 my-0 my-md-5'>
                        <h1 className='display-1 text-primary'>{title}</h1>
                        <p className='small'>{subtitle}</p>
                        <button className='btn btn-outline-primary '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;