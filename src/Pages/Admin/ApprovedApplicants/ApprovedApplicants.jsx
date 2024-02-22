import { faCheck, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import useJwt from "../../../hooks/useJwt";


const ApprovedApplicants = () => {
    const jwt = useJwt();
    const [pageNo, setPageNo] = useState(1);
    const navigate = useNavigate();
    const [pageLimit, setPageLimit] = useState(5);
    const { data, isLoading, refetch } = useQuery("preApplicants", () =>
        axios
            .get(
                `http://localhost:8000/api/get-approved-applicant/${pageNo}/${pageLimit}`,
                { withCredentials: true, headers: { Authorization: `Bearer ${jwt}` } }
            )
            .then((response) => response.data)
    );

    const handlePrevPage = () => {
        setPageNo((prevPageNo) => prevPageNo - 1);
    };

    const handleNextPage = () => {
        setPageNo((prevPageNo) => prevPageNo + 1);
    };

    const handleIndividual = (id) => {
        navigate(`/approved-applicants/${id}`);
    }

    useEffect(() => {
        refetch();
    }, [pageNo, data]);

    const approveHandle = async (id) => {
        jwt && await axios.post(`http://localhost:8000/api/approve-applicant/${id}/Approved`, {
            withCredentials: true, headers: { Authorization: `Bearer ${jwt}` }
        }).then(res => {
            if (res.status === 200) {
                Swal.fire({
                    text: res.data.message,
                    icon: 'success',
                    timer: 1500,
                    position: "top-end",
                    showConfirmButton: false,
                })
            }
            refetch();
        })
    };

    const cancelHandle = async (id) => {
        jwt && await axios.post(`http://localhost:8000/api/approve-applicant/${id}/Canceled`, {
            withCredentials: true, headers: { Authorization: `Bearer ${jwt}` }
        }).then(res => {
            if (res.status === 200) {
                Swal.fire({
                    text: res.data.message,
                    icon: 'success',
                    timer: 1500,
                    position: "top-end",
                    showConfirmButton: false,
                })
            }
            refetch();
        })
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Pre Applicants</h2>
                {data.total > 0 && (
                    <>
                        <table className="table table-bordered  table-striped ">
                            <thead>
                                <tr>
                                    <th>S.N.</th>
                                    <th>Name</th>
                                    <th>Application Type</th>
                                    <th>High School</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((applicant, index) => (
                                    <tr key={applicant.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {applicant.user.firstName} {applicant.user.lastName}
                                        </td>
                                        <td>{applicant.applicationType}</td>
                                        <td>{applicant.highSchool}</td>
                                        <td>
                                            <button className="btn btn-success btn-sm me-2" onClick={() => handleIndividual(applicant.id)}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button className="btn btn-primary btn-sm me-2" onClick={() => approveHandle(applicant.id)}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={() => cancelHandle(applicant.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button
                                className="btn btn-primary rounded-end-0 "
                                onClick={() => {
                                    handlePrevPage();
                                }}
                                disabled={pageNo === 1}
                            >
                                Previous
                            </button>
                            {Array.from({ length: data.last_page }, (_, i) => (
                                <button
                                    key={i + 1}
                                    className={`btn btn-primary rounded-0 ${i + 1 === pageNo ? "active" : ""
                                        }`}
                                    onClick={() => {
                                        setPageNo(i + 1);
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className="btn btn-primary rounded-start-0 "
                                onClick={() => {
                                    handleNextPage();
                                }}
                                disabled={data.last_page === pageNo}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
                {data.total === 0 && <div className="display-6">No Pre Applicants</div>}
            </div>
        </div>
    );
};

export default ApprovedApplicants;