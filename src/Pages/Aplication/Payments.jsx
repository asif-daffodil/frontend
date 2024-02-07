import { useForm } from "react-hook-form";
import AppBreadcrumb from "../../Components/Application/AppBreadcrumb/AppBreadcrumb";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";


const Payments = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <CommonBanner title="Payments" subtitle="Any question or remarks? Just write us a message!" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <AppBreadcrumb />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 py-5">
                        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                            {/* textarea and image input */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Transaction Details</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} {...register('transection_details')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Upload Screenshot/Scan Copy</label>
                                <input className="form-control" type="file" id="formFile" {...register('screenshot')} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payments;