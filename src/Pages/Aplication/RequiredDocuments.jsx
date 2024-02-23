import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Cookies from "js-cookie";


const RequiredDocuments = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { isLoading, data } = useQuery("appData", async () => {
    try {
      const response = await axios.get("https://api.smubd.org/api/get_individual_application", {
        headers: { Authorization: `Bearer ` + Cookies.get("jwt") },
      })
      return response.data;
    }
    catch (error) {
      throw new Error(error.message);
    }
  });
  const onSubmit = (data) => {
    (async () => {
      const formData = new FormData();
      formData.append('ssc', data.ssc[0]);
      formData.append('hsc', data.hsc[0]);
      formData.append('passport', data.passport[0]);
      formData.append('photo', data.photo[0]);
      await axios.post('https://api.smubd.org/api/upload', formData, {
        headers: { Authorization: `Bearer ` + Cookies.get('jwt') },
      }).then(response => {
        if (response.data.message === 'Documents successfully uploaded') {
          Swal.fire({
            text: 'Documents successfully uploaded',
            icon: 'success',
            timer: 1500,
            position: "top-end",
            showConfirmButton: false,
          }).then(() => {
            setTimeout(() => {
              navigate('/application');
            }, 2000);
          })
        }
      })
    })();
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)


  if (!data.application_status) {
    navigate("/application");
  }

  if (data.ssc) {
    navigate("/application");
  }

  return (
    <>
      <CommonBanner
        title="Required Documents"
        subtitle="Any question or remarks? Just write us a message!"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 display-6 py-3">
            Required <span className="text-primary">Documents</span>
          </div>
          <div className="col-md-12 text-bg-primary fw-bolder fs-5">
            Upload Your Required Documents
          </div>
        </div>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          className="mb-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row py-5">
            {/* ssc Certificate */}
            <div className="col-md-6 py-5">
              <p className="small text-center">Upload your SSC Certificate</p>
              <label
                htmlFor="ssc"
                className="text-center border border-primary border-4 bg-primary-subtle py-3 px-5 rounded-pill d-block mx-auto"
                style={{ width: "max-content" }}
              >
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-primary fs-1"
                />
                <p className="small fw-bolder mb-0">
                  drag and drop your file <br /> Or
                </p>
                <span className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </span>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="ssc" id="ssc" className="d-none" {...register('ssc', {
                  required: {
                    value: true,
                    message: "SSC is required"
                  },
                  pattern: {
                    value: /\.(jpe?g|png|gif|bmp)$/i,
                    message: "Invalid SSC format"
                  }
                })} />
                {errors.ssc && <p className='text-danger small'> {errors.ssc.message} </p>}
              </label>
            </div>

            {/* HSC Certificate */}
            <div className="col-md-6 py-5">
              <p className="small text-center">Upload your HSC Certificate</p>
              <label
                htmlFor="hsc"
                className="text-center border border-primary border-4 bg-primary-subtle py-3 px-5 rounded-pill d-block mx-auto"
                style={{ width: "max-content" }}
              >
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-primary fs-1"
                />
                <p className="small fw-bolder mb-0">
                  drag and drop your file <br /> Or
                </p>
                <span className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </span>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="hsc" id="hsc" className="d-none" {...register('hsc', {
                  required: {
                    value: true,
                    message: "HSC is required"
                  },
                  pattern: {
                    value: /\.(jpe?g|png|gif|bmp)$/i,
                    message: "Invalid HSC format"
                  }
                })} />
                {errors.hsc && <p className='text-danger small'> {errors.hsc.message} </p>}
              </label>
            </div>

            {/* Passport copy */}
            <div className="col-md-6 py-5">
              <p className="small text-center">Upload your Passport Copy</p>
              <label
                htmlFor="passport"
                className="text-center border border-primary border-4 bg-primary-subtle py-3 px-5 rounded-pill d-block mx-auto"
                style={{ width: "max-content" }}
              >
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-primary fs-1"
                />
                <p className="small fw-bolder mb-0">
                  drag and drop your file <br /> Or
                </p>
                <span className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </span>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input
                  type="file"
                  name="passport"
                  id="passport"
                  className="d-none"
                  {...register('passport', {
                    required: {
                      value: true,
                      message: "Passport is required"
                    },
                    pattern: {
                      value: /\.(jpe?g|png|gif|bmp)$/i,
                      message: "Invalid passport format"
                    }
                  })}
                />
                {errors.passport && <p className='text-danger small'> {errors.passport.message} </p>}
              </label>
            </div>

            {/* your Photo */}
            <div className="col-md-6 py-5">
              <p className="small text-center">Upload your Photo</p>
              <label
                htmlFor="photo"
                className="text-center border border-primary border-4 bg-primary-subtle py-3 px-5 rounded-pill d-block mx-auto"
                style={{ width: "max-content" }}
              >
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-primary fs-1"
                />
                <p className="small fw-bolder mb-0">
                  drag and drop your file <br /> Or
                </p>
                <span className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </span>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="photo" id="photo" className="d-none" {...register('photo', {
                  required: {
                    value: true,
                    message: "Photo is required"
                  },
                  pattern: {
                    value: /\.(jpe?g|png|gif|bmp)$/i,
                    message: "Invalid photo format"
                  }
                })} />
                {errors.photo && <p className='text-danger small'> {errors.photo.message} </p>}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 h5 py-2 text-center">
              <button type="submit" className="btn btn-outline-primary btn-lg">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequiredDocuments;
