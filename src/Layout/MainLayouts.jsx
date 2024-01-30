import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import TopHeader from "../Components/TopHeader/TopHeader";
import { useAuth } from "../hooks/auth";
import axios from "axios";

const MainLayouts = () => {

    const auth = useAuth();
    (async () => {
        if (auth.user[0]) return;
        await axios.get('http://localhost:8000/api/user', { withCredentials: true })
            .then(response => {
                auth.login(response.data.user);
            })
    })();

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