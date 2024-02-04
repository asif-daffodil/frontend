import { useEffect } from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const NewApplication = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.user[0]) {
            navigate('/login');
        }
    }, [auth.user[0]]);
    return (
        <>
            <CommonBanner title="New Application" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 display-6 py-3">
                    Applicant <span className="text-primary ">Information</span>
                    </div>
                    <div className="col-md-12 text-bg-primary fw-bolder fs-5">
                        Find The Right Application For You
                    </div>
                    <div className="col-md-12 py-5">
                        <form action="" method="post">
                            <div className="mb-3">
                                <label htmlFor="">
                                    Please select what you are applying for?
                                </label>
                                <label htmlFor="Diploma" className="form-check">
                                    <input type="radio" name="applicationType" id="Diploma" value="Undergraduate Degree/Diploma" className="form-check-input" />
                                    <span className="ms-2 form-check-label">Undergraduate Degree/Diploma</span>
                                </label>
                                <label htmlFor="Degree" className="form-check">
                                    <input type="radio" name="applicationType" id="Degree" value="Undergraduate Non Degree-Seeking (including Study Abroad & National Student Exchange)" className="form-check-input" />
                                    <span className="ms-2 form-check-label">Undergraduate Non Degree-Seeking (including Study Abroad & National Student Exchange)</span>
                                </label>
                            </div>
                            <p className="small">
                                You have selected a degree or diploma seeking application. 
                            </p>
                            <div className="mb-3">
                                <label htmlFor="">
                                    Are you currently attending High School?
                                </label>
                                <label htmlFor="highSchoolYes" className="form-check">
                                    <input type="radio" name="highSchool" id="highSchoolYes" value="Yes" className="form-check-input" />
                                    <span className="ms-2 form-check-label">Yes</span>
                                </label>
                                <label htmlFor="highSchoolNo" className="form-check">
                                    <input type="radio" name="highSchool" id="highSchoolNo" value="No" className="form-check-input" />
                                    <span className="ms-2 form-check-label">No</span>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">
                                    Are you a Russian Citizen (primary or dual citizenship)?
                                </label>
                                <label htmlFor="citizenYes" className="form-check">
                                    <input type="radio" name="citizen" id="citizenYes" value="Yes" className="form-check-input" />
                                    <span className="ms-2 form-check-label">Yes</span>
                                </label>
                                <label htmlFor="citizenNo" className="form-check">
                                    <input type="radio" name="citizen" id="citizenNo" value="No" className="form-check-input" />
                                    <span className="ms-2 form-check-label">No</span>
                                </label>
                            </div>
                            <p className="small">
                            Based on your responses to the questions above, you should be completing a Domestic application. Click on the Home link over on the left hand side and start a domestic application.
                            </p>
                            <div className="mb-3">
                                <label htmlFor="">
                                Are you a Russian Permanent Resident, Refugee, DACA Eligible student, Asylee, or qualifying non-citizen under prop 308? 
                                </label>
                                <label htmlFor="residentYes" className="form-check">
                                    <input type="radio" name="resident" id="residentYes" value="Yes" className="form-check-input" />
                                    <span className="ms-2 form-check-label">Yes</span>
                                </label>
                                <label htmlFor="residentNo" className="form-check">
                                    <input type="radio" name="resident" id="residentNo" value="No" className="form-check-input" />
                                    <span className="ms-2 form-check-label">No</span>
                                </label>
                            </div>
                            <p className="small">
                                Based on your responses to the questions above, you should be completing a Domestic application. Click on the Home link over on the left hand side and start a domestic application.
                            </p>
                            <p className="small">
                                Based on your answers above you are considered a first-year student for admission purposes.
                            </p>
                            <button type="submit" className="btn btn-lg btn-outline-primary ">Continue</button>
                        </form>
                        <Link to="/requiredDocuments" className="btn btn-sm btn-outline-primary ms-3">Required Documents</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewApplication;