import { useForm } from "react-hook-form";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect } from "react";

const Payments = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery("payData", () =>
    axios.get("http://localhost:8000/api/get_individual_application", {
      withCredentials: true,
    })
  );

  useEffect(() => {
    refetch();
    if (!data?.data.length == 0) {
      navigate("/applicationStatus");
    }
  }, [data]);

  if (!data?.data.length == 0) {
    navigate("/applicationStatus");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("transection_details", data.transection_details);
    formData.append("screenshot", data.screenshot[0]);
    (async () => {
      await axios
        .post("http://localhost:8000/api/update-payment", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              text: response.data.message,
              icon: "success",
              timer: 1500,
              position: "top-end",
              showConfirmButton: false,
            }).then(() => {
              setTimeout(() => {
                navigate("/applicationStatus");
              }, 2000);
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            Swal.fire({
              text: err.response.data.message,
              icon: "error",
              timer: 1500,
              position: "top-end",
              showConfirmButton: false,
            });
          }
        });
    })();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CommonBanner
        title="Payments"
        subtitle="Any question or remarks? Just write us a message!"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AppBreadcrumb />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 py-5">
            <form
              action=""
              method="post"
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              {/* textarea and image input */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Transaction Details
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  {...register("transection_details", {
                    required: "This field is required",
                  })}
                />
                {errors.transection_details && (
                  <p className="text-danger">
                    {errors.transection_details.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Upload Screenshot/Scan Copy
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  {...register("screenshot", {
                    required: "This field is required",
                    pattern: {
                      value: /(\.jpg|\.jpeg|\.png|\.pdf)$/i,
                      message: "Invalid file format",
                    },
                  })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
