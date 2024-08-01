import '../index.css';
import pdf from '../asset/resume.pdf';
import React, { useState } from 'react';

export default function Header() {
    const [mobileNav, setMobileNav] = useState(null);
    let style1, class8;

    style1 = 'column hide navhide';

    if (mobileNav === 'navShow') {
        style1 = 'column hide';
    }

    return (
        <div className="contain header">
            <div className={style1}>
                <p><i onClick={() => setMobileNav('navHide')} className="fa-solid fa-xmark"></i></p>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#about'>About Me</a></li>
                        <li><a href='#usp'>USP</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#education'>Education</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href='#'>Work</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li>
                            <a href={pdf} target='blank'><button>Download Resume <i className="fa-solid fa-download"></i></button></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="head flex">
                <div className="column show">
                    <i onClick={() => setMobileNav('navShow')} className="fa-solid fa-bars"></i>
                </div>
                <div className="column icon">
                    <a href='https://github.com/Apoorv-AK-Coder' target='blank'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/apoorv-agarwal-38b03a13b/' target='blank'><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    );
}