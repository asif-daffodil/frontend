import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import PreApplication from "../../Components/Application/PreApplication/PreApplication";
import { useQuery } from "react-query";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";

const StartApplication = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const { isLoading, data, refetch } = useQuery("repoData", () =>
        axios
            .get("http://localhost:8000/api/checkpreaplication", {
                withCredentials: true,
            })
            .then((response) => response.data)
    );
    useEffect(
        () => {
            if (!auth.user[0]) {
                navigate("/login");
            }
            refetch();
        },
        [auth.user[0]],
        data
    );
    const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octber",
        "November",
        "December",
    ];
    //  react form hock
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const onSubmit = async (data) => {
        await axios
            .post("http://localhost:8000/api/updateFirstPart", data, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.message === "User successfully updated") {
                    Swal.fire({
                        text: "User successfully updated",
                        icon: "success",
                        timer: 1500,
                        position: "top-end",
                        showConfirmButton: false,
                    });
                }
            });
    };


    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <CommonBanner
                title="Start Application"
                subtitle="Any question or remarks? Just write us a message!"
            />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <AppBreadcrumb />
                    </div>
                    <div className="col-md-12">
                        <h1 className="display-6 ">
                            Start a <span className="text-primary">New Application</span>
                        </h1>
                        <p>
                            <span className="text-danger">Once</span> you have started an
                            application, you can click on the application below to complete
                            and submit it.If you have submitted an application, you can
                            click on the application to check the status.
                        </p>
                    </div>
                    <div className="col-md-12 text-bg-primary h5 py-2">
                        Confirm Personal Information
                    </div>
                    <div className="col-md-6">
                        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    defaultValue={auth?.user[0]?.firstName}
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "First Name is required",
                                        },
                                        pattern: {
                                            value: /^[A-Za-z. ]+$/i,
                                            message: "First Name must be only letters",
                                        },
                                    })}
                                />
                                {errors.firstName && (
                                    <span className="text-danger">
                                        {errors.firstName.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    defaultValue={auth?.user[0]?.lastName}
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Last Name is required",
                                        },
                                        pattern: {
                                            value: /^[A-Za-z. ]+$/i,
                                            message: "Last Name must be only letters",
                                        },
                                    })}
                                />
                                {errors.lastName && (
                                    <span className="text-danger">
                                        {errors.lastName.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Date of Birth</label>
                                <div className="row">
                                    <div className="col-md-4">
                                        <select
                                            className="form-select"
                                            id="month"
                                            {...register("month", {
                                                required: {
                                                    value: true,
                                                    message: "Month is required",
                                                },
                                            })}
                                        >
                                            <option value="">Month</option>
                                            {monthName.map((month, index) => {
                                                return (
                                                    <option
                                                        value={month}
                                                        key={index + 1}
                                                        selected={
                                                            month === auth?.user[0]?.month ? true : false
                                                        }
                                                    >
                                                        {month}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        {errors.month && (
                                            <span className="text-danger">
                                                {errors.month.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Day"
                                            id="day"
                                            name="day"
                                            defaultValue={auth?.user[0]?.day}
                                            {...register("day", {
                                                required: {
                                                    value: true,
                                                    message: "Day is required",
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/i,
                                                    message: "Day must be only numbers",
                                                },
                                            })}
                                        />
                                        {errors.day && (
                                            <span className="text-danger">
                                                {errors.day.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Year"
                                            id="year"
                                            name="year"
                                            defaultValue={auth?.user[0]?.year}
                                            {...register("year", {
                                                required: {
                                                    value: true,
                                                    message: "Year is required",
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/i,
                                                    message: "Year must be only numbers",
                                                },
                                            })}
                                        />
                                        {errors.year && (
                                            <span className="text-danger">
                                                {errors.year.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="submit"
                                    value="update"
                                    className="btn btn-primary btn-lg"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-bg-primary h5 py-2">
                        Answer the questions below to find out which application is best
                        for you.
                    </div>
                    <PreApplication />
                </div>
            </div>
        </>
    );
};

export default StartApplication;
