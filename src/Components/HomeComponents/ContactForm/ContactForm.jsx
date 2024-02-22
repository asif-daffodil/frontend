import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactForm = () => {
    return (
        <div className="container-fluid commonbg">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h3 className="text-center display-4 mb-3">Contact <span className="text-primary">Us</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 bg-primary text-white p-5">
                        <h2>Contact Information</h2>
                        <p className='mb-5'>Say something to start a live chat</p>
                        <table className='' cellPadding="6">
                            <tbody>
                                <tr>
                                    <td><FontAwesomeIcon icon={faPhone} /></td>
                                    <td>+996 555 014 870</td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon icon={faEnvelope} /></td>
                                    <td>smu.bangladesh@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon icon={faLocationDot} /></td>
                                    <td>Bishkek, Kyrgyzstan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 text-center text-primary">
                        <h2>Contact Us</h2>
                        <form action="">
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Full Name' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Email Address' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Phone Number' />
                            </div>
                            <div className="mb-3">
                                <textarea className='form-control' placeholder='Hame anything to say?' rows="5" style={{ resize: "none" }}></textarea>
                            </div>
                            <div className="mb-3">
                                <button className='btn btn-primary btn-lg'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;