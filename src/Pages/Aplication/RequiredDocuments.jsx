import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const RequiredDocuments = () => {
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
        <form action="" method="post" encType="multipart/form-data" className="mb-5">
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
                <button className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </button>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="ssc" id="ssc" className="d-none" />
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
                <button className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </button>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="hsc" id="hsc" className="d-none" />
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
                <button className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </button>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input
                  type="file"
                  name="passport"
                  id="passport"
                  className="d-none"
                />
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
                <button className="btn btn-primary btn-sm px-4 rounded-pill">
                  Browse File
                </button>
                <p className="text-secondary small">
                  Maximum upload file size: 2 MB
                </p>
                <input type="file" name="photo" id="photo" className="d-none" />
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
