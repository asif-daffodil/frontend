import { Outlet } from "react-router-dom";
import Sidebar from "../Components/AdminPanel/Sidebar/Sidebar";


const AdminLayouts = () => {
    const style = {
        minHeight: "100vh",
        overflowY: "scroll",
    }
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