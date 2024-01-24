import About from "../../Components/HomeComponents/About/About";
import Blog from "../../Components/HomeComponents/Blog/Blog";
import Contact from "../../Components/HomeComponents/Contact/Contact";
import Count from "../../Components/HomeComponents/Count/Count";
import EventGallery from "../../Components/HomeComponents/EventGallery/EventGallery";
import HomeSlider from "../../Components/HomeComponents/HomeSlider/HomeSlider";
import LatestNotice from "../../Components/HomeComponents/LatestNotice/LatestNotice";
import MBBSProgram from "../../Components/HomeComponents/MBBSProgram/MBBSProgram";
import OurFaculty from "../../Components/HomeComponents/OurFaculty/OurFaculty";
import TalkWith from "../../Components/HomeComponents/TalkWith/TalkWith";


const Home = () => {
    return (
        <div>
            <HomeSlider />
            <Count />
            <LatestNotice />
            <MBBSProgram />
            <EventGallery />
            <OurFaculty />
            <Blog />
            <TalkWith />
            <About />
            <Contact />
        </div>
    );
};

export default Home;