import blogImg from '../../../images/blog/blog.png';
import author from '../../../images/blog/author.png';

const BlogPost = () => {
    return (
        <div className="container-fluid bg-primary-subtle py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Blog</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white p-3">
                            <img src={blogImg} alt="" />
                            <div className='text-primary fw-lighter s py-3'><small>Technology</small></div>
                            <h5 className='mb-3'>The Impact of Technology on the Wordplace: How Technology is Changing</h5>
                            <div className='card-footer text-muted px-0 d-flex justify-content-start align-items-center'>
                                <img src={author} alt="" className='img-fluid me-2' />
                                <small className='me-2'>Tracey Wilson</small>
                                <small>January-24-2024</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;