import './style.css';
import contact from './asset/contact.png';
import email from './asset/email.png';
import location from './asset/location.png';
import React from 'react';
import Form from './form.jsx';

export default function Contact() {

    return (
        <div className='contact' id='contact'>
            <div className="row">
                <div className="column">
                    <h2>Contact Information</h2>
                </div>
                <div className="column d-flex gap">
                    <div className="column">
                        <Form />
                    </div>
                    <div className="column info">
                        <h3>Conatct Details</h3>
                        <div>
                            <img src={location} />
                            <h4>Current Location</h4>
                            <p>Laxmi Nagar, New Delhi</p>
                        </div>
                        <div>
                            <img src={contact} />
                            <h4>Phone Number</h4>
                            <p><a href='tel:+917906875025'>+91-7906875025</a></p>
                        </div>
                        <div>
                            <img src={email} />
                            <h4>E-mail Id</h4>
                            <p><a href='mailto:contact.apoorv.agarwal@gmail.com'>contact.apoorv.agarwal@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}