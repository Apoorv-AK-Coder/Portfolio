import '../index.css';
import React from 'react';
import image from '../asset/selfi.png';

export default function AboutMe() {
    return (
        <div className="container about" id='about'>
            <div className="row d-flex gap">
                <div className="column">
                    <img src={image} className='w3-animate-bottom' />
                </div>
                <div className="column">
                    <h2>About Me</h2>
                    <p>I'm a dedicated FRONTEND WEB DEVELOPER with a passion for crafting exceptional digital experiences. With a strong foundation in HTML, CSS, and JavaScript & basic knowledge of React.js, I specialize in building responsive and user-centric web applications. I have a keen eye for design and a deep understanding of user experience principles. My expertise lies in JS & React.js. I am committed to staying up-to-date with the latest web development trends to deliver innovative and high-performing solutions.</p>
                </div>

            </div>
        </div>
    );
}