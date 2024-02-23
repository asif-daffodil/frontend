import axios from "axios";
import { useQuery } from "react-query";
import Cookies from "js-cookie";


const PaidApplicants = () => {
    const { data: paidData, isLoading } = useQuery("paidApplicant", async () => {
        try {
            const response = await axios.get(
                `https://api.smubd.org/api/get_all_paid_applicant`,
                { headers: { Authorization: `Bearer ` + Cookies.get('jwt') } }
            )
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    });

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