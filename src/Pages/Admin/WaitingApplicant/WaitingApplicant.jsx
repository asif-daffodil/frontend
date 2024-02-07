import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const WaitingApplicant = () => {
    const [pageNo, setPageNo] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const { data, isLoading, refetch } = useQuery("preApplicants", () =>
      axios
        .get(
          `http://localhost:8000/api/waiting-applicant/${pageNo}/${pageLimit}`,
          { withCredentials: true }
        )
        .then((response) => response.data)
    );
  
    const handlePrevPage = () => {
      setPageNo((prevPageNo) => prevPageNo - 1);
    };
  
    const handleNextPage = () => {
      setPageNo((prevPageNo) => prevPageNo + 1);
    };
  
    useEffect(() => {
      refetch();
    }, [pageNo, data]);

  
      const cancelHandle = async (id) => {
        await axios.post(`http://localhost:8000/api/approve-pre-applicant/${id}/Canceled`, {
            withCredentials: true
        }).then(res => {
            if(res.status === 200){
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
          <h2>Waiting Applicants</h2>
          {data.total > 0 && (
            <>
              <table className="table table-bordered  table-striped ">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Russian Citizen</th>
                    <th>Permanent Resident</th>
                    <th>Campus Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((preApplicant, index) => (
                    <tr key={preApplicant.id}>
                      <td>{index + 1}</td>
                      <td>
                        {preApplicant.user.firstName} {preApplicant.user.lastName}
                      </td>
                      <td>{preApplicant.russain_citizen}</td>
                      <td>{preApplicant.permanent_resident}</td>
                      <td>{preApplicant.location}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => cancelHandle(preApplicant.id)}>Cancel</button>
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
                    className={`btn btn-primary rounded-0 ${
                      i + 1 === pageNo ? "active" : ""
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

export default WaitingApplicant;