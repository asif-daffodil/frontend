import { faCheck, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useQuery } from "react-query";

const PaidApplicants = () => {

    const { data: paidData, isLoading, refetch } = useQuery("paidApplicant", () =>
        axios
            .get(
                `http://localhost:8000/api/get_all_paid_applicant`,
                { withCredentials: true }
            )
            .then((response) => response.data)
    );

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h2>All Paid Applicants</h2>
                {paidData?.data.length > 0 && (
                    <>
                        <table className="table table-bordered  table-striped ">
                            <thead>
                                <tr>
                                    <th>S.N.</th>
                                    <th>Name</th>
                                    <th>Application Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paidData?.data.map((applicant, index) => (
                                    <tr key={applicant.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {applicant.user.firstName} {applicant.user.lastName}
                                        </td>
                                        <td>{applicant.application_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaidApplicants;