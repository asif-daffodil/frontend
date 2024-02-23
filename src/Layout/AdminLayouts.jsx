import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/AdminPanel/Sidebar/Sidebar";
import { useQuery } from "react-query";
import axios from "axios";
import useJwt from "../hooks/useJwt";



const AdminLayouts = () => {
    const jwt = useJwt();
    const navigate = useNavigate();
    const style = {
        minHeight: "100vh",
        overflowY: "scroll",
    }

    const { data: pata, isLoading } = useQuery('repoooData', () =>
        jwt ? axios.get('https://api.smubd.org/api/user',
            { headers: { 'Authorization': `Bearer ${jwt}` } }) : null
    )
    if (isLoading) return <div>Loading...</div>;
    if (pata && pata?.data?.user?.role !== "admin") navigate("/");
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 text-bg-dark" style={style}>
                    <h1 className="p-3">SMU</h1>
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayouts;