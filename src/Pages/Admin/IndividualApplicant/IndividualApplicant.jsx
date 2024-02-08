import { faCheck, faLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const IndividualApplicant = () => {
    const id = useParams().id;
    const navigate = useNavigate();

    const { data, isLoading, refetch } = useQuery("singleApplicant", () =>
        axios
            .get(
                `http://localhost:8000/api/get-individual-applicant/${id}`,
                { withCredentials: true }
            )
            .then((response) => response.data)
    );
    if (isLoading) {
        return <div>Loading...</div>
    }

    const approveHandle = async (id) => {
        await axios.post(`http://localhost:8000/api/approve-applicant/${id}/Approved`, {
            withCredentials: true
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
        await axios.post(`http://localhost:8000/api/approve-applicant/${id}/Canceled`, {
            withCredentials: true
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

    const backHandle = () => {
        return navigate(-1)
    }


    return (
        <div className="row">
            <div className="col-md-4">
                <h2>Individual Applicant</h2>
                {data && (
                    <div>
                        <h3>Full Name : {data.user.firstName} {data.user.lastName}</h3>
                        <p>Email : {data.user.email}</p>
                        <p>Mobile : {data.user.phone}</p>
                        <p>Parent Mobile: {data.user.parent_phone}</p>
                        <p>Russain Citizen : {data.russain_citizen}</p>
                        <p>Permanent Resident : {data.permanent_resident}</p>
                        <p>Date of Birth : {data.user.day}/{data.user.month}/{data.user.year}</p>
                    </div>
                )}
            </div>
            <div className="col-md-4">
                <h2>Stident Picture</h2>
                {data.photo && <img src={`http://localhost:8000/storage/${data.photo}`} className=" img-fluid" alt="" />}
                {!data.photo && <p className="text-danger">No photo uploaded</p>}
            </div>
            <div className="col-md-4">
                <div className="mb-3">
                    <button className="btn btn-primary btn-lg" onClick={() => approveHandle(data.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                        &nbsp;
                        Approve
                    </button>
                </div>
                <div className="mb-3">
                    <button className="btn btn-danger btn-lg" onClick={() => cancelHandle(data.id)}>
                        <FontAwesomeIcon icon={faXmark} />
                        &nbsp;
                        Cancel
                    </button>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg" onClick={backHandle}>
                        <FontAwesomeIcon icon={faLeftLong} />
                        &nbsp;
                        Back
                    </button>
                </div>
            </div>
            <div className="col-md-12">
                {data.transection_details &&
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="card">
                                <h2 className="text-center card-header">Payment Details : {data.transection_details}</h2>
                                {data.screenshot && <img src={`http://localhost:8000/storage/${data.screenshot}`} className=" img-fluid" alt="" />}
                                {!data.screenshot && <p className="text-danger">No image uploaded</p>}
                            </div>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">SSC Certificate </h2>
                            {data.ssc && <img src={`http://localhost:8000/storage/${data.ssc}`} className=" img-fluid" alt="" />}
                            {!data.ssc && <p className="text-danger">No SSC certificate uploaded</p>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">HSC</h2>
                            {data.hsc && <img src={`http://localhost:8000/storage/${data.hsc}`} className=" img-fluid" alt="" />}
                            {!data.hsc && <p className="text-danger">No HSC certificate uploaded</p>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">Passport</h2>
                            {data.passport && <img src={`http://localhost:8000/storage/${data.passport}`} className=" img-fluid" alt="" />}
                            {!data.passport && <p className="text-danger">No passport uploaded</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualApplicant;