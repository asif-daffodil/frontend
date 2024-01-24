import { Link } from 'react-router-dom';
import galleryImg from '../../../images/eventGallery.png';

const EventGallery = () => {
    return (
        <div className='container-fluid py-5 bg-primary-subtle '>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Event <span className="text-primary">Gallery</span></h3>
                    </div>
                    <div className="col-md-12 text-center py-5">
                        <img src={galleryImg} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-12 text-center fs-3">
                        <Link to='/gallery' className='text-primary'>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventGallery;