import './style.css';
import React from 'react';

export default function WorkData() {
    return (
        <div className="workdata" id='work'>
            <div className="row">
                <div className="column">
                    <h2>My Projects</h2>
                    <hr></hr>
                    <h3>Development Projects</h3>
                    <div className="d-flex gap">
                        <iframe src='https://apoorv-ak-coder.github.io/Digital-Web/' />
                        <iframe src='https://apoorv-ak-coder.github.io/ChatBot/' />
                    </div>
                    <div className="d-flex gap">
                        <iframe src='https://apoorv-ak-coder.github.io/SIMPLE-STITCH-WEAR' />
                        <iframe src='https://apoorv-ak-coder.github.io/NetFlix-Clone/' />
                    </div>
                    <hr></hr>
                    <h3>Figma Project</h3>
                    <div className="column d-flex gap">
                        <div>
                            <p>Mobile Design</p>
                            <a href='https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=3-5&t=OFYw0ce04hdRZzG0-1&scaling=scale-down&page-id=0%3A1' target='blank'><p>https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=3-5&t=OFYw0ce04hdRZzG0-1&scaling=scale-down&page-id=0%3A1</p></a>
                        </div>
                        <div>
                            <p>Desktop Design</p>
                            <a href='https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=86-490&t=l2ejupZBrCAeYIXK-1&scaling=scale-down&page-id=86%3A41'><p>https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=86-490&t=l2ejupZBrCAeYIXK-1&scaling=scale-down&page-id=86%3A41</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}