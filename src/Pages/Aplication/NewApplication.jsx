import { useEffect, useState } from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useQuery } from "react-query";
import useJwt from "../../hooks/useJwt";
import Cookies from "js-cookie";


const NewApplication = () => {
  const jwt = useJwt();
  const auth = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery("preApplicationData", async () => {
    try {
      const response = await axios.get("https://api.smubd.org/api/checkpreaplication", {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  });

  useEffect(() => {
    if (!auth.user[0]) {
      navigate("/login");
    }
    axios.get("https://api.smubd.org/api/get_individual_application", {
      headers: { Authorization: `Bearer ` + Cookies.get("jwt") },
    }).then((res) => {
      if (!res.data) {
        navigate("/requiredDocuments");
      }
    });
  }, [auth.user[0]]);

  const [ugCheck, setUgCheck] = useState("d-none");
  const [checkHighSchool, setCheckHighSchool] = useState("d-none");
  const [checkCitizen, setCheckCitizen] = useState("d-none");
  const [showResident, setShowResident] = useState("d-none");
  const [checkResident, setCheckResident] = useState("d-none");
  const [checkDegree, setCheckDegree] = useState("d-none");

  const highSchoolYes = document.getElementById("highSchoolYes");
  const highSchoolNo = document.getElementById("highSchoolNo");
  const citizenYes = document.getElementById("citizenYes");
  const citizenNo = document.getElementById("citizenNo");
  const residentYes = document.getElementById("residentYes");
  const residentNo = document.getElementById("residentNo");


  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  if (isLoading) return <div>Loading...</div>;
  if (!data) {
    navigate("/application");
  } else if (!data[0]?.application_status) {
    navigate("/application");
  } else if (data[0]?.application_status === "Pending") {
    navigate("/application");
  }


  const onSubmit = async (data) => {
    (async () => {
      await axios.post("https://api.smubd.org/api/new-application", data, { headers: { Authorization: `Bearer ${jwt}` } }).then((res) => {
        if (res.status === 201) {
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
          navigate("/requiredDocuments");
        }
      }).catch((err) => {
        if (err.response.status === 409) {
          Swal.fire({
            text: err.response.data.message,
            icon: "error",
          });
        }
      });
    })();
  };
  return (
    <>
      <CommonBanner
        title="New Application"
        subtitle="Any question or remarks? Just write us a message!"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 display-6 py-3">
            Applicant <span className="text-primary ">Information</span>
          </div>
          <div className="col-md-12 text-bg-primary fw-bolder fs-5">
            Find The Right Application For You
          </div>
          <div className="col-md-12 py-5">
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="">
                  Please select what you are applying for?
                </label>
                <label htmlFor="Diploma" className="form-check">
                  <input
                    type="radio"
                    name="applicationType"
                    id="Diploma"
                    value="Undergraduate Degree/Diploma"
                    className="form-check-input"
                    {...register("applicationType")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setUgCheck("d-block");
                        setCheckHighSchool("d-none");
                        setCheckCitizen("d-none");
                        setShowResident("d-none");
                        setCheckResident("d-none");
                        setCheckDegree("d-none");
                      }
                      highSchoolYes.checked = false;
                      highSchoolNo.checked = false;
                      citizenYes.checked = false;
                      citizenNo.checked = false;
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">
                    Undergraduate Degree/Diploma
                  </span>
                </label>
                <label htmlFor="Degree" className="form-check">
                  <input
                    type="radio"
                    name="applicationType"
                    id="Degree"
                    value="Undergraduate Non Degree-Seeking (including Study Abroad & National Student Exchange)"
                    className="form-check-input"
                    {...register("applicationType")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setUgCheck("d-none");
                        setCheckHighSchool("d-block");
                        setCheckCitizen("d-none");
                        setShowResident("d-none");
                        setCheckResident("d-none");
                        setCheckDegree("d-none");
                      }
                      highSchoolYes.checked = false;
                      highSchoolNo.checked = false;
                      citizenYes.checked = false;
                      citizenNo.checked = false;
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">
                    Undergraduate Non Degree-Seeking (including Study Abroad &
                    National Student Exchange)
                  </span>
                </label>
              </div>
              <p className={`small ${ugCheck}`}>
                You have selected a degree or diploma seeking application.
              </p>
              <div className={`mb-3 ${ugCheck}`}>
                <label htmlFor="">
                  Are you currently attending High School?
                </label>
                <label htmlFor="highSchoolYes" className="form-check">
                  <input
                    type="radio"
                    name="highSchool"
                    id="highSchoolYes"
                    value="Yes"
                    className="form-check-input"
                    {...register("highSchool")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckHighSchool("d-block");
                        setCheckResident("d-none");
                        setCheckDegree("d-none");
                        setCheckCitizen("d-none");
                        setShowResident("d-none");
                      }
                      citizenYes.checked = false;
                      citizenNo.checked = false;
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">Yes</span>
                </label>
                <label htmlFor="highSchoolNo" className="form-check">
                  <input
                    type="radio"
                    name="highSchool"
                    id="highSchoolNo"
                    value="No"
                    className="form-check-input"
                    {...register("highSchool")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckHighSchool("d-block");
                        setCheckResident("d-none");
                        setShowResident("d-none");
                        setCheckCitizen("d-none");
                        setCheckDegree("d-none");
                      }
                      citizenYes.checked = false;
                      citizenNo.checked = false;
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">No</span>
                </label>
              </div>
              <div className={`mb-3 ${checkHighSchool}`}>
                <label htmlFor="">
                  Are you a Russian Citizen (primary or dual citizenship)?
                </label>
                <label htmlFor="citizenYes" className="form-check">
                  <input
                    type="radio"
                    name="russain_citizen"
                    id="citizenYes"
                    value="Yes"
                    className="form-check-input"
                    {...register("russain_citizen")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckCitizen("d-block");
                        setShowResident("d-none");
                        setCheckResident("d-none");
                      }
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">Yes</span>
                </label>
                <label htmlFor="citizenNo" className="form-check">
                  <input
                    type="radio"
                    name="russain_citizen"
                    id="citizenNo"
                    value="No"
                    className="form-check-input"
                    {...register("russain_citizen")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckCitizen("d-none");
                        setShowResident("d-block");
                      }
                      residentYes.checked = false;
                      residentNo.checked = false;
                    }}
                  />
                  <span className="ms-2 form-check-label">No</span>
                </label>
              </div>
              <p className={`small ${checkCitizen} text-danger`}>
                Based on your responses to the questions above, you should be
                completing a Domestic application. Click on the Home link over
                on the left hand side and start a domestic application.
              </p>
              <div className={`mb-3 ${showResident}`}>
                <label htmlFor="">
                  Are you a Russian Permanent Resident, Refugee, DACA Eligible
                  student, Asylee, or qualifying non-citizen under prop 308?
                </label>
                <label htmlFor="residentYes" className="form-check">
                  <input
                    type="radio"
                    name="permanent_resident"
                    id="residentYes"
                    value="Yes"
                    className="form-check-input"
                    {...register("permanent_resident")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckResident("d-block");
                        setCheckDegree("d-none");
                      }
                    }}
                  />
                  <span className="ms-2 form-check-label">Yes</span>
                </label>
                <label htmlFor="residentNo" className="form-check">
                  <input
                    type="radio"
                    name="permanent_resident"
                    id="residentNo"
                    value="No"
                    className="form-check-input"
                    {...register("permanent_resident")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckResident("d-none");
                        setCheckDegree("d-block");
                      }
                    }}
                  />
                  <span className="ms-2 form-check-label">No</span>
                </label>
              </div>
              <p className={`small ${checkResident} text-danger`}>
                Based on your responses to the questions above, you should be
                completing a Domestic application. Click on the Home link over
                on the left hand side and start a domestic application.
              </p>
              <div className={`${checkDegree}`}>
                <p className={`small text-success`}>
                  Based on your answers above you are considered.
                </p>
                <button type="submit" className="btn btn-lg btn-outline-primary ">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewApplication;
