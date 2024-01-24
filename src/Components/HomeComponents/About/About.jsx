import { faLightbulb, faRocket, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className="container-fluid bg-primary-subtle ">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h3 className="text-center display-4">About <span className="text-primary">Us</span></h3>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 text-uppercase display-4 ">
                        <big className="text-primary ">Who</big> We Are
                    </div>
                    <div className="col-md-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolore iusto maiores, enim, rerum cumque, suscipit qui voluptates eius assumenda sapiente doloremque hic soluta! Explicabo harum quisquam doloremque unde nisi itaque cumque aspernatur. Error, ipsam consequatur adipisci reiciendis velit eum. Sequi placeat, asperiores voluptate impedit eveniet eaque voluptatum aspernatur id exercitationem, natus corporis nostrum deleniti inventore neque dignissimos recusandae assumenda?
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 border-start border-5 border-danger ">
                        <FontAwesomeIcon icon={faRocket} className="text-danger fs-1" />
                        <div className="display-6 fw-bold text-primary text-uppercase ">Lorem Ipsum is simply</div>
                    </div>
                    <div className="col-md-4 border-start border-5 border-danger ">
                        <FontAwesomeIcon icon={faLightbulb} className="text-danger fs-1" />
                        <div className="display-6 fw-bold text-primary text-uppercase ">Lorem Ipsum is simply</div>
                    </div>
                    <div className="col-md-4 border-start border-5 border-danger ">
                        <FontAwesomeIcon icon={faRotate} className="text-danger fs-1" />
                        <div className="display-6 fw-bold text-primary text-uppercase ">Lorem Ipsum is simply</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-secondary border-start border-dark ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor minima dolorem inventore accusamus id sint quidem, minus facere incidunt quod vitae maiores eum eaque quas tempora fugit atque corporis provident quam odio? Sint, quos ducimus, porro tenetur quam inventore vel doloremque, temporibus nobis rem magnam omnis minima a id non earum. Mollitia recusandae magnam sint cumque officiis dolore id!
                    </div>
                    <div className="col-md-4 text-secondary border-start border-dark ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor minima dolorem inventore accusamus id sint quidem, minus facere incidunt quod vitae maiores eum eaque quas tempora fugit atque corporis provident quam odio? Sint, quos ducimus, porro tenetur quam inventore vel doloremque, temporibus nobis rem magnam omnis minima a id non earum. Mollitia recusandae magnam sint cumque officiis dolore id!
                    </div>
                    <div className="col-md-4 text-secondary border-start border-dark ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor minima dolorem inventore accusamus id sint quidem, minus facere incidunt quod vitae maiores eum eaque quas tempora fugit atque corporis provident quam odio? Sint, quos ducimus, porro tenetur quam inventore vel doloremque, temporibus nobis rem magnam omnis minima a id non earum. Mollitia recusandae magnam sint cumque officiis dolore id!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;