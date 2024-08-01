import './style.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_wkgfga4', 'template_4vhwepn', formData, '9inrOrQRC9PJsvir-')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message. Please try again.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Conatct Me</h3>
            <p>Full Name*</p>
            {/* <input type='text' placeholder='Write Here...' required /> */}
            <input type='text' placeholder='Type Your Full Name Here...' name='fullName' value={formData.fullName} onChange={handleChange} required />
            <p>Phone No.*</p>
            <input type='tel' placeholder='Mobile Number Available on Whatsapp...' name='phone' value={formData.phone} onChange={handleChange} required />
            <p>E-mail*</p>
            <input type='email' placeholder='Enter Here...' name='email' value={formData.email} onChange={handleChange} required />
            <p>Message*</p>
            <textarea placeholder='Type Here...' name='message' value={formData.message} onChange={handleChange} required></textarea>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    );

}