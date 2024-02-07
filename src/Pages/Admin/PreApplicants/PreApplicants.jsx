import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";


const PreApplicants = () => {
    const [pageNo, setPageNo] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const {data, isLoading} = useQuery('preApplicants', () => axios.get(`http://localhost:8000/api/get-pre-applicant/${pageNo}/${pageLimit}`, {withCredentials: true}).then(response => response.data));
    if (isLoading) {
        return (<div>Loading...</div>)
    }
    console.log(data);
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Pre Aplication</h2>
            </div>

        </div>
    );
};

export default PreApplicants;