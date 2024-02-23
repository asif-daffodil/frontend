import { faCheck, faLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Cookies from "js-cookie";


const IndividualApplicant = () => {
    const id = useParams().id;
    const navigate = useNavigate();

    const { data, isLoading, refetch } = useQuery("singleApplicant", async () => {
        try {
            const response = await axios.get(`https://api.smubd.org/api/get-individual-applicant/${id}`,
                { headers: { Authorization: `Bearer ` + Cookies.get('jwt') } }
            )
            return response.data;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });



    if (isLoading) {
        return <div>Loading...</div>
    }

    const approveHandle = async (id) => {
        await axios.post(`https://api.smubd.org/api/approve-applicant/${id}/Approved`, {
            headers: { Authorization: `Bearer ` + Cookies.get('jwt') }
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
        await axios.post(`https://api.smubd.org/api/approve-applicant/${id}/Canceled`, {
            headers: { Authorization: `Bearer ` + Cookies.get('jwt') }
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
                {data.photo && <div className="d-flex flex-column align-items-center"><img src={`https://api.smubd.org/storage/${data.photo}`} className="img-fluid mb-2" alt="" /> <a href={`https://api.smubd.org/storage/${data.photo}`} className="btn btn-sm btn-primary" download>Download</a></div>}
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
                                {data.screenshot && <div className="d-flex flex-column align-items-center"><img src={`https://api.smubd.org/storage/${data.screenshot}`} className="img-fluid mb-2" alt="" /><a href={`https://api.smubd.org/storage/${data.screenshot}`} className="btn btn-sm btn-primary" download>Download</a></div>}
                                {!data.screenshot && <p className="text-danger">No image uploaded</p>}
                            </div>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">SSC Certificate </h2>
                            {data.ssc && <div className="d-flex flex-column align-items-center"><img src={`https://api.smubd.org/storage/${data.ssc}`} className=" img-fluid mb-2" alt="" /><a href={`https://api.smubd.org/storage/${data.ssc}`} className="btn btn-sm btn-primary" download>Download</a></div>}
                            {!data.ssc && <p className="text-danger">No SSC certificate uploaded</p>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">HSC</h2>
                            {data.hsc && <div className="d-flex flex-column align-items-center"><img src={`https://api.smubd.org/storage/${data.hsc}`} className="img-fluid mb-2" alt="" /><a href={`https://api.smubd.org/storage/${data.hsc}`} className="btn btn-sm btn-primary" download>Download</a></div>}
                            {!data.hsc && <p className="text-danger">No HSC certificate uploaded</p>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="text-center card-header">Passport</h2>
                            {data.passport && <div className="d-flex flex-column align-items-center"><img src={`https://api.smubd.org/storage/${data.passport}`} className=" img-fluid" alt="" /><a href={`https://api.smubd.org/storage/${data.passport}`} className="btn btn-sm btn-primary" download>Download</a></div>}
                            {!data.passport && <p className="text-danger">No passport uploaded</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualApplicant;