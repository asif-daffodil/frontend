import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import TopHeader from "../Components/TopHeader/TopHeader";
import { useAuth } from "../hooks/auth";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";

const MainLayouts = () => {

    const auth = useAuth();
    const { isLoading, data } = useQuery('repoData', () =>
        axios.get('http://localhost:8000/api/user', { withCredentials: true }).then(response => response.data)
    )

    useEffect(() => {
        if (!auth.user[0] && data) {
            auth.login(data);
        }
    }, [auth.user[0]], data);


    return (
        <>
            <TopHeader />
            <MainNavbar />
            {isLoading ? <div className="col-md-12 text-center">Loading...</div> : <Outlet />}
            <Footer />
        </>
    );
};

export default MainLayouts;