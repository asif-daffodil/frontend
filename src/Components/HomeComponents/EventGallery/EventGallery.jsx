import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/event-gallery/Rectangle3846.svg';
import image2 from '../../../assets/images/event-gallery/Rectangle3847.svg';
import image3 from '../../../assets/images/event-gallery/Rectangle3848.svg';
import image4 from '../../../assets/images/event-gallery/Rectangle3850.svg';
import image5 from '../../../assets/images/event-gallery/Rectangle3851.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EventGallery.css';
import { EffectCoverflow, Autoplay } from 'swiper/modules';


const eventGallery = [
    {
        id: 1,
        image: image1
    },
    {
        id: 2,
        image: image2
    },
    {
        id: 3,
        image: image3
    },
    {
        id: 4,
        image: image4
    },
    {
        id: 5,
        image: image5
    },
    {
        id: 6,
        image: image1
    },
    {
        id: 7,
        image: image2
    },
    {
        id: 8,
        image: image3
    },
    {
        id: 9,
        image: image4
    },
    {
        id: 10,
        image: image5
    },
]

const EventGallery = () => {

    const breakpoints = {
        0: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
    };
    return (
        <div className='container-fluid py-5 bg-primary-subtle event-slider'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Event <span className="text-primary">Gallery</span></h3>
                    </div>
                    <div className="col-md-12 text-center py-5">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            breakpoints={breakpoints}
                            coverflowEffect={{
                                rotate: -2,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: true
                            }}
                            loop={true}
                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                        >

                            {
                                eventGallery?.map((slider, i) => <SwiperSlide key={i}>
                                    <img src={slider?.image} alt="Slider Image" />
                                </SwiperSlide>)
                            }
                        </Swiper>


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