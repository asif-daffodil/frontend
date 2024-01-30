import { useNavigate } from 'react-router-dom';
import bannerImg from '../../images/slides/homeSlide1.jpg';
import { useForm } from 'react-hook-form';
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


    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const onSubmit = data => {
        axios.post('http://localhost:8000/api/login', data, { withCredentials: true })
            .then(response => {
                auth.login(response.data.user);
                Swal.fire({
                    text: 'Login Successful!',
                    icon: 'success',
                    timer: 1500,
                    position: "top-end",
                    showConfirmButton: false,
                }).then(() => {
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                })
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12" style={bannerBg}>
                    <div className='container py-0 py-md-5 my-0 my-md-5'>
                        <h1 className='display-1 text-primary'>Applicant Login</h1>
                        <p className='small'>Any question or remarks? Just write us a message!</p>
                        <button className='btn btn-outline-primary '>Learn More</button>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 py-5">
                                <h1 className='display-6 text-primary mb-3'>Applicant Login</h1>
                                <form action="" method='post' className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"

                                            }, pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Invalid email format"
                                            }
                                        })} />
                                        {errors.email && <p className='text-danger small'>
                                            {errors.email.message}
                                        </p>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            }
                                        })} />
                                        {errors.password && <p className='text-danger small'>
                                            {errors.password.message}
                                        </p>}
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                                <p className='small'>
                                    Don&apos;t have any account? <button href="/signup" className='btn btn-primary btn-sm' onClick={() => navigate("/signup")}>Create Account</button> Here.
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