import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import useJwt from "../../hooks/useJwt";


const ApplicationStatus = () => {
    const jwt = useJwt();
    const navigate = useNavigate();
    const goToNewApp = () => {
        navigate("/newApplication");
    };
    const { isLoading, data, refetch } = useQuery("epoData", async () => {
        try {
            await axios.get("https://api.smubd.org/api/checkpreaplication", {
                headers: { Authorization: `Bearer ${jwt}` },
            }).then((response) => response.data);
        } catch (e) {
            throw new Error(e.message);
        }
    });

    useEffect(() => {
        refetch();
    }, [data]);

    if (data?.data?.length == 0) {
        navigate("/application");
    }


    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <>
            <CommonBanner
                title="Application Status"
                subtitle="Any question or remarks? Just write us a message!"
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 display-6 py-3">
                        Application <span className="text-primary">Status</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
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
                                    </tr>
                                ) : (
                                    data?.data?.map((item, index) => (
                                        <tr key={index}>
                                            <td colSpan="6" className="text-danger">
                                                {item.user.firstName} {item.user.lastName}
                                            </td>
                                            <td>{item.application_status}</td>
                                            <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                            <td>
                                                {item.application_status !== "Pending" && (
                                                    <button
                                                        className="btn btn-sm btn-outline-primary mb-3"
                                                        onClick={() => goToNewApp()}
                                                    >
                                                        Application of Salymbekov
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
        </>
    );
};

export default ApplicationStatus;
