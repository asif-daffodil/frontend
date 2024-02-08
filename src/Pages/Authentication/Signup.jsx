import { useNavigate } from 'react-router-dom';
import bannerImg from '../../images/slides/homeSlide1.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const bannerBg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const Signup = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    if (auth.user[0]) {
        navigate('/');
    }

    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [firstName, setFirstName] = useState("");
    const [errFirstName, setErrFirstName] = useState("");
    const [crrFirstName, setCrrFirstName] = useState(false);

    const [lastName, setLastName] = useState("");
    const [errLastName, setErrLastName] = useState("");
    const [crrLastName, setCrrLastName] = useState(false);

    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [crrEmail, setCrrEmail] = useState(false);

    const [phone, setPhone] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [crrPhone, setCrrPhone] = useState(false);

    const [parent_phone, setParent_phone] = useState("");
    const [errParentPhone, setErrParentPhone] = useState("");
    const [crrParentPhone, setCrrParentPhone] = useState(false);

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

    const handlePhone = (e) => {
        let phoneVal = e.target.value;
        setPhone(phoneVal);

        if (phoneVal.length < 10) {
            setErrPhone("Invalid phone");
        } else if (phoneVal.match(/[^+0-9 *$]/)) {
            setErrPhone("Invalid phone");
        } else {
            setErrPhone("");
            setCrrPhone(true);
        }
    }

    const handleParentPhone = (e) => {
        let parentPhoneVal = e.target.value;
        setParent_phone(parentPhoneVal);

        if (parentPhoneVal.length < 10) {
            setErrParentPhone("Invalid phone");
        } else if (parentPhoneVal.match(/[^+0-9 *$]/)) {
            setErrParentPhone("Invalid phone");
        } else {
            setErrParentPhone("");
            setCrrParentPhone(true);
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
            setErrPassword("Password must contain at least one phone");
        } else if (!passwordVal.match(/[^a-zA-Z\d]/g)) {
            setErrPassword("Password must contain at least one special character");
        } else {
            setErrPassword("");
            setCrrPassword(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validation

        let firstNameVal = e.target.firstName.value;
        if (firstNameVal < 3) {
            setErrFirstName("First name must be at least 3 characters long");
        } else if (firstNameVal.match(/[^a-zA-Z. *$]/)) {
            setErrFirstName("First name must contain only letters");
        } else {
            setErrFirstName("");
            setCrrFirstName(true);
        }

        let lastNameVal = e.target.lastName.value;
        if (lastNameVal < 3) {
            setErrLastName("Last name must be at least 3 characters long");
        } else if (lastNameVal.match(/[^a-zA-Z. *$]/)) {
            setErrLastName("Last name must contain only letters");
        } else {
            setErrLastName("");
            setCrrLastName(true);
        }

        let emailVal = e.target.email.value;
        if (emailVal < 3) {
            setErrEmail("Email must be at least 3 characters long");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
            setErrEmail("Email must be valid");
        } else {
            setErrEmail("");
            setCrrEmail(true);
        }

        let phoneVal = e.target.phone.value;
        if (phoneVal < 10) {
            setErrPhone("Invalid phone");
        } else if (phoneVal.match(/[^+0-9 *$]/)) {
            setErrPhone("Invalid phone");
        } else {
            setErrPhone("");
            setCrrPhone(true);
        }

        let parentPhoneVal = e.target.parentPhone.value;
        if (parentPhoneVal < 10) {
            setErrParentPhone("Invalid phone");
        } else if (parentPhoneVal.match(/[^+0-9 *$]/)) {
            setErrParentPhone("Invalid phone");
        } else {
            setErrParentPhone("");
            setCrrParentPhone(true);
        }

        let monthVal = e.target.month.value;
        if (monthVal.length == 0) {
            setErrMonth("Month must be selected");
        } else {
            setErrMonth("");
            setCrrMonth(true);
        }

        let dayVal = e.target.day.value;
        if (!parseInt(dayVal) || parseInt(dayVal) > 31) {
            setErrDay("Invalid day");
        } else {
            setErrDay("");
            setCrrDay(true);
        }

        let yearVal = e.target.year.value;
        if (!parseInt(yearVal) || parseInt(yearVal) > 2021) {
            setErrYear("Invalid year");
        } else {
            setErrYear("");
            setCrrYear(true);
        }

        let passwordVal = e.target.password.value;
        if (passwordVal.length < 8) {
            setErrPassword("Password must be at least 8 characters long");
        } else if (!passwordVal.match(/[a-z]/g)) {
            setErrPassword("Password must contain at least one lowercase letter");
        } else if (!passwordVal.match(/[A-Z]/g)) {
            setErrPassword("Password must contain at least one uppercase letter");
        } else if (!passwordVal.match(/[0-9]/g)) {
            setErrPassword("Password must contain at least one phone");
        } else if (!passwordVal.match(/[^a-zA-Z\d]/g)) {
            setErrPassword("Password must contain at least one special character");
        } else {
            setErrPassword("");
            setCrrPassword(true);
        }



        if (crrFirstName && crrLastName && crrEmail && crrPhone && crrParentPhone && crrMonth && crrDay && crrYear && crrPassword) {
            await axios.post('https://api.smubd.org/api/register', {
                firstName,
                lastName,
                email,
                phone,
                parent_phone,
                month,
                day,
                year,
                password
            }).then(response => {
                if (response.data.message === "User successfully registered") {
                    Swal.fire({
                        text: response.data.message,
                        icon: 'success',
                        timer: 1500,
                        position: "top-end",
                        showConfirmButton: false,
                    });
                    navigate("/login");
                } else {
                    Swal.fire({
                        text: response.data.message,
                        icon: 'error',
                        timer: 1500,
                        position: "top-end",
                        showConfirmButton: false,
                    });
                }

            });
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
                                <form action="" method='post' className='mb-4' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" value={firstName} onChange={handleFirstName} id="firstName" name="firstName" />
                                                <p className='small text-danger'>{errFirstName}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" value={lastName} onChange={handleLastName} id="lastName" />
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
                                        <label htmlFor="phone" className="form-label">Applicant phone</label>
                                        <input type="text" className="form-control" id="phone" value={phone} onChange={handlePhone} />
                                        <p className='small text-danger'>{errPhone}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="parentPhone" className="form-label">Parent Phone</label>
                                        <input type="text" className="form-control" id="parentPhone" value={parent_phone} onChange={handleParentPhone} />
                                        <p className='small text-danger'>{errParentPhone}</p>
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
                                                <input type="text" className="form-control" placeholder='Day' value={day} onChange={handleDay} id="day" name="day" />
                                                <p className='small text-danger'>{errDay}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" className="form-control" placeholder='Year' value={year} onChange={handleYear} id="year" name="year" />
                                                <p className='small text-danger'>{errYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
                                        <p className='small text-danger'>{errPassword}</p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
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

