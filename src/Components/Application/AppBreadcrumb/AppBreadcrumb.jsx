import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Link to="/application" className="breadcrumb-item ">Application</Link>
      <Link to="/startApplication" className="breadcrumb-item ">Start Application</Link>
      <Link to="/applicationStatus" className="breadcrumb-item ">Application Status</Link>
      <Link to="/newApplication" className="breadcrumb-item" >New Application</Link>
      <Link to="/requiredDocuments" className="breadcrumb-item ">Required Documents</Link>
      <Link to="/payments" className="breadcrumb-item ">Payments</Link>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
