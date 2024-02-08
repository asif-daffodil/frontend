import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/AdminPanel/Sidebar/Sidebar";
import { useQuery } from "react-query";
import axios from "axios";


const AdminLayouts = () => {
    const navigate = useNavigate();
    const style = {
        minHeight: "100vh",
        overflowY: "scroll",
    }
    const { data, isLoading } = useQuery('repoData', () =>
        axios.get('https://api.smubd.org/api/user', { withCredentials: true }).then(response => response.data.user)
    )

    if (isLoading) return <div>Loading...</div>;

    if (data.role !== "admin") return navigate("/");

    console.log(data);
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