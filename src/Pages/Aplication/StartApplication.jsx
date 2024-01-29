import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useContext } from "react";
import AuthContext from "../../hooks/AuthContext";
import { useForm } from "react-hook-form";

const StartApplication = () => {
    const auth = useContext(AuthContext);
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octber', 'November', 'December'];
    //  react form hock
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = data => console.log(data);
    return (
        <>
            <CommonBanner title="Start Application" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-6 ">Start a <span className="text-primary">New Application</span></h1>
                        <p>
                            <span className="text-danger">Once</span> you have started an application, you can click on the application below to complete and submit it.If you have submitted an application, you can click on the application to check the status.
                        </p>
                    </div>
                    <div className="col-md-12 text-bg-primary h5 py-2">Confirm Personal Information</div>
                    <div className="col-md-6">
                        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" defaultValue={auth?.user?.firstName} {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: "First Name is required"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z. ]+$/i,
                                        message: "First Name must be only letters"
                                    }
                                })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" defaultValue={auth?.user?.lastName} {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: "Last Name is required"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z. ]+$/i,
                                        message: "Last Name must be only letters"
                                    }
                                })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Date of Birth</label>
                                <div className="row">
                                    <div className="col-md-4">
                                        <select className="form-select" id="month" {...register('month', {
                                            required: {
                                                value: true,
                                                message: "Month is required"
                                            }
                                        })}>
                                            <option value="">Month</option>
                                            {
                                                monthName.map((month, index) => {
                                                    return (
                                                        <option value={month} key={index + 1} selected={month === auth?.user?.month ? true : false}>{month}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" placeholder='Day' id="day" name="day" defaultValue={auth?.user?.day} {...register('day', {
                                            required: {
                                                value: true,
                                                message: "Day is required"
                                            },
                                            pattern: {
                                                value: /^[0-9]+$/i,
                                                message: "Day must be only numbers"
                                            }
                                        })} />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" placeholder='Year' id="year" name="year" defaultValue={auth?.user?.year} {...register('year', {
                                            required: {
                                                value: true,
                                                message: "Year is required"
                                            },
                                            pattern: {
                                                value: /^[0-9]+$/i,
                                                message: "Year must be only numbers"
                                            }
                                        })} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="update" className="btn btn-primary btn-lg" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartApplication;