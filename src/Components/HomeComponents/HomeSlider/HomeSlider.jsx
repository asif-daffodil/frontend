import Carousel from 'react-bootstrap/Carousel';
import slideImg from '../../../images/slides/homeSlide1.jpg';
import './HomeSlider.css';

function HomeSlider() {
    return (
        <Carousel fade data-bs-theme="dark">
            <Carousel.Item>
                <img src={slideImg} alt="" className='img-fluid' />
                <Carousel.Caption>
                    <h4 className='text-dark'>Providing Best Education
                        For Bright <span className='text-primary'>Future!</span></h4>
                    <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry&apos;s standard dummy text ever since the 1500s,  </p>
                    <button className='btn btn-primary'>Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slideImg} alt="" className='img-fluid' />
                <Carousel.Caption>
                    <h4 className='text-dark'>Providing Best Education
                        For Bright <span className='text-primary'>Future!</span></h4>
                    <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry&apos;s standard dummy text ever since the 1500s,  </p>
                    <button className='btn btn-primary'>Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slideImg} alt="" className='img-fluid' />
                <Carousel.Caption>
                    <h4 className='text-dark'>Providing Best Education
                        For Bright <span className='text-primary'>Future!</span></h4>
                    <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry&apos;s standard dummy text ever since the 1500s,  </p>
                    <button className='btn btn-primary'>Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeSlider;