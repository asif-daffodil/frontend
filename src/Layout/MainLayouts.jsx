import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";

const MainLayouts = () => {
    return (
        <>
            <MainNavbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouts;