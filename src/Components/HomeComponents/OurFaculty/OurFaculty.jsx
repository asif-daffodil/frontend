import { Link } from 'react-router-dom';
import facultyImg from '../../../images/faculty/faculty.png';
const OurFaculty = () => {
    return (
        <div className="container-fluid commonbg">
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Our <span className="text-primary">Faculty</span></h3>
                    </div>
                </div>
                <div className="row d-block d-md-flex justify-content-center gap-5 mb-4">
                    <div className="col">
                        <div className="card text-center border-0">
                            <img src={facultyImg} alt="" className='card-img img-fluid mb-3' />
                            <h5 className='text-primary'>San Wilson</h5>
                            <small>Principal</small>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center border-0">
                            <img src={facultyImg} alt="" className='card-img img-fluid mb-3' />
                            <h5 className='text-primary'>San Wilson</h5>
                            <small>Principal</small>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center border-0">
                            <img src={facultyImg} alt="" className='card-img img-fluid mb-3' />
                            <h5 className='text-primary'>San Wilson</h5>
                            <small>Principal</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center fs-3">
                        <Link to='/faculty' className='text-primary'>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFaculty;