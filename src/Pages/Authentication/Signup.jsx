import { useNavigate } from 'react-router-dom';
import bannerImg from '../../images/slides/homeSlide1.jpg';
import { useState } from 'react';

const bannerBg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const Signup = () => {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [errFirstName, setErrFirstName] = useState("");
    const [crrFirstName, setCrrFirstName] = useState(false);

    const [lastName, setLastName] = useState("");
    const [errLastName, setErrLastName] = useState("");
    const [crrLastName, setCrrLastName] = useState(false);

    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [crrEmail, setCrrEmail] = useState(false);

    const [number, setNumber] = useState("");
    const [errNumber, setErrNumber] = useState("");
    const [crrNumber, setCrrNumber] = useState(false);

    const [parentNumber, setParentNumber] = useState("");
    const [errParentNumber, setErrParentNumber] = useState("");
    const [crrParentNumber, setCrrParentNumber] = useState(false);

    const [month, setMonth] = useState("");
    const [errMonth, setErrMonth] = useState("");
    const [crrMonth, setCrrMonth] = useState(false);

    const [day, setDay] = useState("");
    const [errDay, setErrDay] = useState("");
    const [crrDay, setCrrDay] = useState(false);

    const [year, setYear] = useState("");
    const [errYear, setErrYear] = useState("");
    const [crrYear, setCrrYear] = useState(false);

    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [crrPassword, setCrrPassword] = useState(false);



    const handleFirstName = (e) => {
        let firstNameVal = e.target.value;
        setFirstName(firstNameVal);

        if (firstNameVal.length < 3) {
            setErrFirstName("First name must be at least 3 characters long");
        } else if (firstNameVal.match(/[^a-zA-Z. *$]/)) {
            setErrFirstName("First name must contain only letters");
        } else {
            setErrFirstName("");
            setCrrFirstName(true);
        }
    };

    const handleLastName = (e) => {
        let lastNameVal = e.target.value;
        setLastName(lastNameVal);

        if (lastNameVal.length < 3) {
            setErrLastName("Last name must be at least 3 characters long");
        } else if (lastNameVal.match(/[^a-zA-Z. *$]/)) {
            setErrLastName("Last name must contain only letters");
        } else {
            setErrLastName("");
            setCrrLastName(true);
        }
    }

    const handleEmail = (e) => {
        let emailVal = e.target.value;
        setEmail(emailVal);

        if (emailVal.length < 3) {
            setErrEmail("Email must be at least 3 characters long");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
            setErrEmail("Email must be valid");
        } else {
            setErrEmail("");
            setCrrEmail(true);
        }
    }

    const handleMonth = (e) => {
        let monthVal = e.target.value;
        setMonth(monthVal);

        if (monthVal.length == 0) {
            setErrMonth("Month must be selected");
        } else {
            setErrMonth("");
            setCrrMonth(true);
        }
    }

    const handleNumber = (e) => {
        let numberVal = e.target.value;
        setNumber(numberVal);

        if (numberVal.length < 10) {
            setErrNumber("Invalid number");
        } else if (numberVal.match(/[^+0-9 *$]/)) {
            setErrNumber("Invalid number");
        } else {
            setErrNumber("");
            setCrrNumber(true);
        }
    }

    const handleParentNumber = (e) => {
        let parentNumberVal = e.target.value;
        setParentNumber(parentNumberVal);

        if (parentNumberVal.length < 10) {
            setErrParentNumber("Invalid number");
        } else if (parentNumberVal.match(/[^+0-9 *$]/)) {
            setErrParentNumber("Invalid number");
        } else {
            setErrParentNumber("");
            setCrrParentNumber(true);
        }
    }

    const handleDay = (e) => {
        let dayVal = e.target.value;
        setDay(dayVal);

        if (!parseInt(dayVal) || parseInt(dayVal) > 31) {
            setErrDay("Invalid day");
        } else {
            setErrDay("");
            setCrrDay(true);
        }
    }

    const handleYear = (e) => {
        let yearVal = e.target.value;
        setYear(yearVal);

        if (!parseInt(yearVal) || parseInt(yearVal) > 2021) {
            setErrYear("Invalid year");
        } else {
            setErrYear("");
            setCrrYear(true);
        }
    }

    const handlePassword = (e) => {
        let passwordVal = e.target.value;
        setPassword(passwordVal);

        if (passwordVal.length < 8) {
            setErrPassword("Password must be at least 8 characters long");
        } else if (!passwordVal.match(/[a-z]/g)) {
            setErrPassword("Password must contain at least one lowercase letter");
        } else if (!passwordVal.match(/[A-Z]/g)) {
            setErrPassword("Password must contain at least one uppercase letter");
        } else if (!passwordVal.match(/[0-9]/g)) {
            setErrPassword("Password must contain at least one number");
        } else if (!passwordVal.match(/[^a-zA-Z\d]/g)) {
            setErrPassword("Password must contain at least one special character");
        } else {
            setErrPassword("");
            setCrrPassword(true);
        }
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12" style={bannerBg}>
                    <div className='container py-0 py-md-5 my-0 my-md-5'>
                        <h1 className='display-1 text-primary'>Create an Account</h1>
                        <p className='small'>Any question or remarks? Just write us a message!</p>
                        <button className='btn btn-outline-primary '>Learn More</button>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 py-5">
                                <h1 className='display-6 text-primary mb-3'>Applicant Signup</h1>
                                <form action="" method='post' className='mb-4'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="fname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" value={firstName} onChange={handleFirstName} id="fname" />
                                                <p className='small text-danger'>{errFirstName}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="lname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" value={lastName} onChange={handleLastName} id="lname" />
                                                <p className='small text-danger'>{errLastName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={handleEmail} />
                                        <p className='small text-danger'>{errEmail}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="number" className="form-label">Applicant number</label>
                                        <input type="text" className="form-control" id="number" value={number} onChange={handleNumber} />
                                        <p className='small text-danger'>{errNumber}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="parentNumber" className="form-label">Parent Number</label>
                                        <input type="text" className="form-control" id="parentNumber" value={parentNumber} onChange={handleParentNumber} />
                                        <p className='small text-danger'>{errParentNumber}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Date of Birth</label>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <select className="form-select" id="month" value={month} onChange={handleMonth}>
                                                    <option value="">Month</option>
                                                    {
                                                        monthName.map((month, index) => {
                                                            return (
                                                                <option value={month} key={index + 1}>{month}</option>
                                                            );
                                                        })
                                                    }
                                                </select>
                                                <p className='small text-danger'>{errMonth}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" className="form-control" placeholder='Day' value={day} onChange={handleDay} />
                                                <p className='small text-danger'>{errDay}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" className="form-control" placeholder='Year' value={year} onChange={handleYear} />
                                                <p className='small text-danger'>{errYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
                                        <p className='small text-danger'>{errPassword}</p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                                <p className='small'>
                                    Already have an account? <button onClick={() => navigate("/login")} className='btn btn-primary btn-sm'>Login</button> Here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Signup;

