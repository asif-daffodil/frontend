import { Link } from "react-router-dom";
import MBBSBanner from "../../../images/mbbsBanner.png";
import "./MBBSProgram.css";

const MBBSProgram = () => {
    return (
        <div className="container-fluid py-5 commonbg">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center display-4 mb-3">MBBS <span className="text-primary">Program</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto mb-3">
                    <img src={MBBSBanner} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto ">
                    <h4 className="text-primary">
                        PROGRAM : Bachelor of Medicine & Bachelor of Surgery (MBBS)
                    </h4>
                    <ul>
                        <li>Course Duration : 05 Years.</li>
                        <li>Medium of Instruction : English.</li>
                    </ul>
                    <h4 className="text-primary">
                        Admission Requirements :
                    </h4>
                    <ul>
                        <li><span className="text-danger">Apply</span> to check requirements.</li>
                    </ul>
                    <h4 className="text-primary">
                        Admission Requirements :
                    </h4>
                    <ul>
                        <li>10th & 12th class mark sheet & Certificate.</li>
                        <li>Passport copy.</li>
                        <li>Passport size photo (white background)</li>
                    </ul>
                    <Link to="/application" className="btn btn-danger me-3">Apply For Admission</Link>
                    <Link to="/apply" className="btn btn-primary">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default MBBSProgram;