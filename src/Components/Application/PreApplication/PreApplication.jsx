import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import useJwt from '../../../hooks/useJwt';


const PreApplication = () => {
    const jwt = useJwt();
    const [bootmMessage, setBootmMessage] = useState('');
    const [displaypermanent_resident, setDisplaypermanent_resident] = useState('d-none');
    const [displayLocation, setDisplayLocation] = useState('d-none');
    const { register, handleSubmit } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const onSubmit = data => {
        axios.post('https://api.smubd.org/api/preaplication', data, { headers: { Authorization: `Bearer ${jwt}` } }).then(response => {
            if (response.data.message === 'Preaplication successfully registered') {
                Swal.fire({
                    text: 'Application successfully created',
                    icon: 'success',
                    timer: 1500,
                    position: "top-end",
                    showConfirmButton: false,
                })
                navigate('/application');
            } else if (response.data.message === 'You already have an application') {
                Swal.fire({
                    text: 'Application already exists',
                    icon: 'error',
                    timer: 1500,
                    position: "top-end",
                    showConfirmButton: false,
                })
            }
        })
    }
    return (
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12 mb-3">
                Are you a Russian russain_citizen?
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="russain_citizen" id="russain_citizenYes" value="Yes" {...register('russain_citizen')} onChange={
                        (e) => {
                            if (e.target.checked) {
                                setDisplayLocation('d-block');
                                setDisplaypermanent_resident('d-none');
                                setBootmMessage('You can enter your Bishkek/Osh application on the next page after you submit this form.')
                            }
                        }
                    } />
                    <label className="form-check-label" htmlFor="russain_citizenYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="russain_citizen" id="russain_citizenNo" value="No" {...register('russain_citizen')} onChange={
                        (e) => {
                            if (e.target.checked) {
                                setDisplayLocation('d-none');
                                setDisplaypermanent_resident('d-block');
                                setBootmMessage('You can enter your International application on the next page after you submit this form.')
                            }
                        }
                    } />
                    <label className="form-check-label" htmlFor="russain_citizenNo">
                        No
                    </label>
                </div>
            </div>
            <div className={`col-md-12 mb-3 ${displaypermanent_resident}`}>
                Are you a Russian Permanent Resident, Refugee, DACA Eligible student?
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="permanent_resident" id="permanent_residentYes" value="Yes" {...register('permanent_resident')} onChange={
                        (e) => {
                            if (e.target.checked) {
                                setDisplayLocation('d-block');
                            }
                        }
                    } />
                    <label className="form-check-label" htmlFor="permanent_residentYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="permanent_resident" id="permanent_residentNo" value="No" {...register('permanent_resident')} onChange={
                        (e) => {
                            if (e.target.checked) {
                                setDisplayLocation('d-blobk');
                            }
                        }
                    } />
                    <label className="form-check-label" htmlFor="permanent_residentNo">
                        No
                    </label>
                </div>
            </div>
            <div className={`col-md-12 mb-3 ${displayLocation}`}>
                Which location do you want to study at?
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="location" id="locationBishkek" value="Bishkek" {...register('location')} />
                    <label className="form-check-label" htmlFor="locationBishkek">
                        Bishkek
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="location" id="locationOsh" value="Osh" {...register('location')} />
                    <label className="form-check-label" htmlFor="locationOsh">
                        Osh
                    </label>
                </div>
                <small>
                    {bootmMessage}
                </small>
            </div>
            <button className="btn btn-lg btn-outline-primary" type="submit">Submit</button>
        </form>
    );
};

export default PreApplication;