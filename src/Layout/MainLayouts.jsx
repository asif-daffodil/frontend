import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import TopHeader from "../Components/TopHeader/TopHeader";

const MainLayouts = () => {
    return (
        <>
            <TopHeader />
            <MainNavbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouts;