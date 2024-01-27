import { Link } from 'react-router-dom';
import bannerImg from '../../images/slides/homeSlide1.jpg';

const bannerBg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const Signup = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12" style={bannerBg}>
                    <div className='container py-0 py-md-5 my-0 my-md-5'>
                        <h1 className='display-1 text-primary'>Applicant Login/Signup</h1>
                        <p className='small'>Any question or remarks? Just write us a message!</p>
                        <button className='btn btn-outline-primary '>Learn More</button>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className='container py-0 py-md-5'>
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <h1 className='display-6 text-primary'>Applicant Login / Create Account</h1>
                            </div>
                            <div className="col-md-6">
                                <Link to='/login' className='btn btn-primary btn-lg mb-3'>Login</Link>
                                <p className='small'>If already have an account</p>
                            </div>
                            <div className="col-md-6">
                                <Link to='/signup' className='btn btn-primary btn-lg mb-3'>Create Account</Link>
                                <p className='small'>If you don&apos;1t have an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;