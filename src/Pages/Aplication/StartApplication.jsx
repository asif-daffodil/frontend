import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { useContext } from "react";
import AuthContext from "../../hooks/AuthContext";
import { useForm } from "react-hook-form";

const StartApplication = () => {
    const auth = useContext(AuthContext);
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octber', 'November', 'December'];
    //  react form hock
    const { register, handleSubmit } = useForm();
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
                                <input type="text" className="form-control" id="firstName" defaultValue={auth.user.firstName} {...register('firstName')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Date of Birth</label>
                                <div className="row">
                                    <div className="col-md-4">
                                        <select className="form-select" id="month">
                                            <option value="">Month</option>
                                            {
                                                monthName.map((month, index) => {
                                                    return (
                                                        <option value={month} key={index + 1}>{month}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" placeholder='Day' id="day" name="day" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" placeholder='Year' id="year" name="year" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartApplication;