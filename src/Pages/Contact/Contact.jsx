import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import ContactForm from "../../Components/HomeComponents/ContactForm/ContactForm";


const Contact = () => {
    return (
        <div>
            <CommonBanner title="Contact Us" subtitle="Any question or remarks? Just write us a message!" />
            <ContactForm />
        </div>
    );
};

export default Contact;