import bannerImg from '../../images/slides/homeSlide1.jpg';

const AboutBanner = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12 position-relative">
                    <img src={bannerImg} alt="" className='visually-hidden img-fluid' />
                    <img src={bannerImg} alt="" className='position-absolute top-0 start-0 img-fluid bottom-0 end-0' />
                    <div className='position-absolute container start-50 translate-middle-x py-0 py-md-5 my-0 my-md-5'>
                        <h1 className='display-1 text-primary'>About Us</h1>
                        <p className='small'>Any question or remarks? Just write us a message!</p>
                        <button className='btn btn-outline-primary '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;