import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer className="container-fluid bg-btn-primary  text-bg-primary pt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-start ">
                        <h3>Our Contact Details</h3>
                        <button className="btn btn-light">Let Contact</button>
                    </div>
                    <div className="col-md-8">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <h6>Tlephone</h6>
                                <p>880175-5788</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Office</h6>
                                <p>Califirnia, USA</p>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h6>WhatsApp</h6>
                                <p>880175-5788</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Email</h6>
                                <p>smu@gmail.com</p>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row bg-white">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-6">
                                <img src={logo} alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6 small d-flex justify-content-end align-items-center   text-secondary ">
                                &copy; 2024 SMU. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;