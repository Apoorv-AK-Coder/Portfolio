import './style.css';
import React from 'react';
import { SkillData } from './data.js';

function Skilldata({ image, title }) {
    return (
        <div id='skillsection'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default function Skills() {

    return (
        <div className="skills" id='skills'>
            <div className="row">
                <div className="column">
                    <div><h2>Skills & Technologies</h2>
                        <p>Driving Frontend Development Excellence with Advanced Skills and Technologies.Delivering Engaging Interfaces and High-Performance Web Solutions for the Modern Digital Landscape.</p>
                    </div>
                </div>

                <div className="column skillsec">
                    {SkillData.map((contentItem) => <Skilldata {...contentItem} />)}
                    {/* <><Skilldata {...SkillData} /></>
                    <><Skilldata {...SkillData[0]} /></>
                    <><Skilldata {...SkillData[1]} /></>
                    <><Skilldata {...SkillData[2]} /></>
                    <><Skilldata {...SkillData[3]} /></> */}
                </div>

            </div>
        </div>
    );
}