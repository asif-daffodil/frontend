import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/auth";
import { useQuery } from "react-query";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";

const Application = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const { isLoading, data, refetch } = useQuery("repoData", () =>
        axios.get("https://api.smubd.org/api/checkpreaplication", {
            withCredentials: true,
        })
    );

    useEffect(
        () => {
            if (!auth.user[0]) {
                navigate("/login");
            }
            refetch();
        },
        [auth.user[0]],
        data
    );

    const goToNewApp = () => {
        navigate("/newApplication");
    };

    const goToPayment = () => {
        navigate("/payments");
    };

    console.log(data);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <CommonBanner
                title="Your Application"
                subtitle="Any question or remarks? Just write us a message!"
            />
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <AppBreadcrumb />
                    </div>
                    {isLoading ? (
                        <div className="col-md-12 text-center">Loading...</div>
                    ) : (
                        <div className="col-md-12">
                            <h1 className="display-6 text-primary">Start Application</h1>
                            <div className="row">
                                <p className="small col-md-6">
                                    <span className="text-danger">Once</span> you have started an
                                    application, you can click on the application below to
                                    complete and submit it.If you have submitted an application,
                                    you can click on the application to check the status.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        className="btn btn-lg btn-outline-primary mb-3"
                                        onClick={() => navigate("/startApplication")}
                                    >
                                        Application of Salymbekov
                                    </button>
                                    <table className="table border border-1 border-dark">
                                        <thead>
                                            <tr>
                                                <th colSpan="6" className="text-bg-primary">
                                                    Your Applications Type
                                                </th>
                                                <th className="text-bg-primary">Status</th>
                                                <th className="text-bg-primary">Started</th>
                                                <th className="text-bg-primary">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.data?.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6">
                                                        You have not yet started an application using this
                                                        account.
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            ) : (
                                                data?.data?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td colSpan="6" className="text-danger">
                                                            {item.user.firstName} {item.user.lastName}
                                                        </td>
                                                        <td>{item.application_status}</td>
                                                        <td>
                                                            {new Date(item.created_at).toLocaleDateString()}
                                                        </td>
                                                        <td>
                                                            {item.application_status === "Approved" && (
                                                                <button
                                                                    className="btn btn-sm btn-outline-primary mb-3"
                                                                    onClick={() => goToNewApp()}
                                                                >
                                                                    Application of Salymbekov
                                                                </button>
                                                            )}
                                                            {item.application_status === "Applied" && (
                                                                <button
                                                                    className="btn btn-sm btn-outline-primary mb-3"
                                                                    onClick={() => goToPayment()}
                                                                >
                                                                    Apply For Visa
                                                                </button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Application;
