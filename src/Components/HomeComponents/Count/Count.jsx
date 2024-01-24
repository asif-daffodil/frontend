import CountUp from "react-countup";
import "./Count.css";

const Count = () => {
    return (
        <div className="container d-none d-lg-block ">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="counter text-white text-center">
                        <CountUp end={1500} duration={1} className="fs-3 countNumber" />
                        <div>Bangladeshi</div>
                        <div>Student</div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="counter text-white text-center">
                        <CountUp end={1500} duration={1} className="fs-3 countNumber" />
                        <div>Bangladeshi</div>
                        <div>Student</div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="counter text-white text-center">
                        <CountUp end={1500} duration={1} className="fs-3 countNumber" />
                        <div>Bangladeshi</div>
                        <div>Student</div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="counter text-white text-center">
                        <CountUp end={1500} duration={1} className="fs-3 countNumber" />
                        <div>Bangladeshi</div>
                        <div>Student</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;