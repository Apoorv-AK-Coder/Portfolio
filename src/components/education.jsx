import React from 'react';
import '../index.css';
import {Study} from '../data.js';

function Data({title, description, year, college, university}) {
    return (
        <div className="column edu titel">
        <div className="titel">
            <h3>{title} / {year}</h3>
            <p>{university}</p>
        </div>
        <div className="details">
            <p>{description}</p>
        </div>
        </div>
    );
}


export default function Education() {
    return(
        <div className="container education" id='education'>
            <div className="row">
                <div className="column">
                    <h2>My Qualifications</h2>
                    <div className="d-flex gap">
                        {Study.map((contentItem) => <Data {...contentItem} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}