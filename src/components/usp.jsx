import React from 'react';
import '../index.css';
import { USPdata } from '../data.js';

function Data({ title, description, image, num }) {
    return <div className="column">
        <div className="details">
            <h2>{num}</h2>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <img src={image} alt={title} />
    </div>
}

export default function USP() {
    return (
        <div className="container usps" id='usp'>
            <div className="row d-flex">
                {USPdata.map((contentItem) => <Data {...contentItem} />)}
            </div>
        </div>
    );
}