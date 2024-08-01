import './style.css';
import image from './asset/selfi.png';
import pdf from './asset/resume.pdf';
import React from 'react';

export default function Hero() {
    return (
        <div className='heroBG' id='home'>
            <div className='row d-flex'>
                <div className='column left'>
                    <p className='para'><i className="fa-solid fa-hands-clapping"></i> HELLO I'AM</p>
                    <h1>Apoorv Agarwal</h1>
                    <p className='para'>Front-End Developer / UI Developer / Web Developer</p>
                    <p>Passionate about continuous learning and problem-solving, with a knack for identifying and implementing creative approaches to enhance the overall UX.</p>
                    <div className='d-flex'>
                        <a href={pdf} target='blank'><button>Download Resume <i className="fa-solid fa-download"></i></button></a>
                        <div className='flex'>
                            <a href='https://github.com/Apoorv-AK-Coder' target='blank'><i className="fa-brands fa-github"></i></a>
                            <a href='https://www.linkedin.com/in/apoorv-agarwal-38b03a13b/' target='blank'><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}