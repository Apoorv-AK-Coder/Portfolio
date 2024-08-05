import '../index.css';
import React, { useState } from 'react';
import { workData } from '../data.js';

export default function Work() {

    const itemsPerSlide = 3;
    const numSlides = Math.ceil(workData.length / itemsPerSlide);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
    };

    const startIndex = currentSlide * itemsPerSlide;
    const currentItems = workData.slice(startIndex, startIndex + itemsPerSlide);


    return (
        <div className="container work">
            <div className="row">
                <div className="column">
                    <h2>My Work</h2>
                    <div className="slider-container d-flex">
                        <button className="prev" onClick={handlePrev}>❮❮</button>
                        <div className="slider-content">
                            <div className="d-flex gap">
                                {currentItems.map((item, index) => (
                                    <div key={index} className="work-item">
                                        <h3>{item.project}</h3>
                                        <p>{item.skills}</p>
                                        <p>{item.description}</p>
                                        <iframe src={item.link} title={item.project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="slider-button next" onClick={handleNext}>❯❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
}