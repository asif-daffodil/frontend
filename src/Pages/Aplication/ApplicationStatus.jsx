import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useAuth } from "../../hooks/auth";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";

const ApplicationStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const goToNewApp = () => {
    navigate("/newApplication");
  };
  return (
    <>
      <CommonBanner
        title="Application Status"
        subtitle="Any question or remarks? Just write us a message!"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AppBreadcrumb />
          </div>
          <div className="col-md-12 display-6 py-3">
            Application <span className="text-primary">Status</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-lg btn-outline-primary mb-3"
              onClick={() => goToNewApp()}
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
                  <th className="text-bg-primary">Submitted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6">
                    You have not yet started an application using this account.
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {auth?.user[0]?.preaplication?.map((item, index) => (
                  <tr key={index}>
                    <td colSpan="6" className="text-danger">
                      {auth.user[0]?.firstName} {auth.user[0]?.lastName}
                    </td>
                    <td>{item.application_status}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationStatus;
