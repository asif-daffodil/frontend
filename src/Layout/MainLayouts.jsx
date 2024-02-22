import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import TopHeader from "../Components/TopHeader/TopHeader";
import { useAuth } from "../hooks/auth";
import axios from "axios";
import useJwt from "../hooks/useJwt";
import { useQuery } from "react-query";


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