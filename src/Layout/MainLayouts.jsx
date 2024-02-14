import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import TopHeader from "../Components/TopHeader/TopHeader";
import { useAuth } from "../hooks/auth";
import axios from "axios";
import { useQuery } from "react-query";

const MainLayouts = () => {

    const auth = useAuth();
    const { isLoading, data } = useQuery('repoData', () =>
        axios.get('https://api.smubd.org/api/user', { withCredentials: true }).then(response => auth.login(response.data.user))
    )



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