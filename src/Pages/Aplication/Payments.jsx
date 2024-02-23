import { useForm } from "react-hook-form";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect } from "react";
import useJwt from "../../hooks/useJwt";
import Cookies from "js-cookie";


const Payments = () => {
    const jwt = useJwt();
    const navigate = useNavigate();
    const { data, isLoading, refetch } = useQuery("payData", async () => {
        try {
            const response = await axios.get("https://api.smubd.org/api/get_individual_application", {
                headers: { Authorization: `Bearer ` + Cookies.get("jwt") },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    });

    useEffect(() => {
        refetch();
        if (!data?.length == 0) {
            navigate("/applicationStatus");
        }
    }, [data]);

    if (!data?.length == 0) {
        navigate("/applicationStatus");
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        const formData = new FormData();
        const payment_details = data.payment_method + " :" + data.transection_details;
        formData.append("transection_details", payment_details);
        formData.append("screenshot", data.screenshot[0]);
        (async () => {
            await axios
                .post("https://api.smubd.org/api/update-payment", formData, {
                    headers: { Authorization: `Bearer ` + Cookies.get('jwt') },
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
                                navigate("/application");
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
                            <h2 className="border-bottom pb-3 mb-5">Payment</h2>
                            <div className="mb-3">
                                <h4>Pay With :</h4>
                                <div className="">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                            value="bkash"
                                            {...register("payment_method", {
                                                required: "This field is required",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault1"
                                        >
                                            Bkash
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            value="rocket"
                                            {...register("payment_method", {
                                                required: "This field is required",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault2"
                                        >
                                            Rocket
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault3"
                                            value="nagad"
                                            {...register("payment_method", {
                                                required: "This field is required",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault3"
                                        >
                                            Nagad
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault4"
                                            value="bank"
                                            {...register("payment_method", {
                                                required: "This field is required",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault4"
                                        >
                                            Bank
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault5"
                                            value="manual"
                                            {...register("payment_method", {
                                                required: "This field is required",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault5"
                                        >
                                            Manual
                                        </label>
                                    </div>
                                    {errors.payment_method && (
                                        <p className="text-danger">
                                            Please select a payment method
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    Transaction Details :
                                </label>
                                <input
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    defaultValue={""}
                                    {...register("transection_details", {
                                        required: "This field is required",
                                    })}
                                    placeholder="Transaction Number"
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
