import { useEffect } from "react";
import About from "../../Components/HomeComponents/About/About";
import BlogPost from "../../Components/HomeComponents/BlogPost/BlogPost";
import ContactForm from "../../Components/HomeComponents/ContactForm/ContactForm";
import Count from "../../Components/HomeComponents/Count/Count";
import EventGallery from "../../Components/HomeComponents/EventGallery/EventGallery";
import HomeSlider from "../../Components/HomeComponents/HomeSlider/HomeSlider";
import LatestNotice from "../../Components/HomeComponents/LatestNotice/LatestNotice";
import MBBSProgram from "../../Components/HomeComponents/MBBSProgram/MBBSProgram";
import OurFaculty from "../../Components/HomeComponents/OurFaculty/OurFaculty";
import TalkWith from "../../Components/HomeComponents/TalkWith/TalkWith";


const Home = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <div>
            <HomeSlider />
            <Count />
            <LatestNotice />
            <MBBSProgram />
            <EventGallery />
            <OurFaculty />
            <BlogPost />
            <TalkWith />
            <About />
            <ContactForm />
        </div>
    );
};

export default Home;