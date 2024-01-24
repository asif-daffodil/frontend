import Count from "../../Components/HomeComponents/Count/Count";
import EventGallery from "../../Components/HomeComponents/EventGallery/EventGallery";
import HomeSlider from "../../Components/HomeComponents/HomeSlider/HomeSlider";
import LatestNotice from "../../Components/HomeComponents/LatestNotice/LatestNotice";
import MBBSProgram from "../../Components/HomeComponents/MBBSProgram/MBBSProgram";
import OurFaculty from "../../Components/HomeComponents/OurFaculty/OurFaculty";


const Home = () => {
    return (
        <div>
            <HomeSlider />
            <Count />
            <LatestNotice />
            <MBBSProgram />
            <EventGallery />
            <OurFaculty />
        </div>
    );
};

export default Home;