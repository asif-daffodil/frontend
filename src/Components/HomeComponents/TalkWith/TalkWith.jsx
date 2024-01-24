import studentImg from '../../../images/student/profilePicture.png';
import whatsApp from '../../../images/student/whatsapp.png';

const TalkWith = () => {
    return (
        <div className="container-fluid commonbg">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Talk with <span className="text-primary">SMU Student</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 px-5 py-4">
                        <div className="card bg-primary-subtle text-center p-5">
                            <img src={studentImg} alt="" className='img-fluid w-25 m-auto mb-3' />
                            <h5><small>Angela Moss</small></h5>
                            <h6 className='text-primary'><small>Session: 2022-23</small></h6>
                            <div>
                                <img src={whatsApp} alt="" className='img-fluid bg-success rounded-circle me-2' />
                                <a href="https://wa.me/+1234567890" target='_blank' rel='noreferrer' className=''>
                                    <small>+12 345 6789 0</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-5 py-4">
                        <div className="card bg-primary-subtle text-center p-5">
                            <img src={studentImg} alt="" className='img-fluid w-25 m-auto mb-3' />
                            <h5><small>Angela Moss</small></h5>
                            <h6 className='text-primary'><small>Session: 2022-23</small></h6>
                            <div>
                                <img src={whatsApp} alt="" className='img-fluid bg-success rounded-circle me-2' />
                                <a href="https://wa.me/+1234567890" target='_blank' rel='noreferrer' className=''>
                                    <small>+12 345 6789 0</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-5 py-4">
                        <div className="card bg-primary-subtle text-center p-5">
                            <img src={studentImg} alt="" className='img-fluid w-25 m-auto mb-3' />
                            <h5><small>Angela Moss</small></h5>
                            <h6 className='text-primary'><small>Session: 2022-23</small></h6>
                            <div>
                                <img src={whatsApp} alt="" className='img-fluid bg-success rounded-circle me-2' />
                                <a href="https://wa.me/+1234567890" target='_blank' rel='noreferrer' className=''>
                                    <small>+12 345 6789 0</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalkWith;