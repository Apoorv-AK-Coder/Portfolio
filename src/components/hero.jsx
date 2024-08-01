import '../index.css';
import bg1 from '../asset/bg1.mp4';
import React from 'react';

export default function Hero() {
    return (
        <div className="contain hero" id='home'>
            <video src={bg1} autoPlay loop muted />
            <video src={bg1} autoPlay loop muted />
            <div className='row d-flex'>
                <div className='column left'>
                    <h4><i className="fa-solid fa-hands-clapping"></i> HELLO I'AM</h4>
                    <h1>Apoorv Agarwal</h1>
                    <h3>Frontend Web Developer</h3>
                    <p>Passionate about continuous learning and problem-solving, with a knack for identifying and implementing creative approaches to enhance the overall UX.</p>
                </div>
            </div>
        </div>
    );
}