import './style.css';
import { Example } from './data.js';
import { useState } from 'react';
import React from 'react';

export default function Education() {
    function TabButton({ label, onClick, isSelected }) {
        return <div className={isSelected ? 'active' : undefined} onClick={onClick}>
            <h3>{label}</h3>
        </div>;
    }
    const [selectedTopic, setSelectedTopic] = useState('Button1');

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedButton);
    }
    return (
        <section>
            <div className="row" id='education'>
                <div className="column">
                    <h2>My Qualification</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'Button1'} label="Post Graduation" onClick={() => handleClick('Button1')} />
                        <TabButton isSelected={selectedTopic === 'Button2'} label="Graduation" onClick={() => handleClick('Button2')} />
                    </menu>
                    <div className="tabContent">
                        <h3>{Example[selectedTopic].title}</h3>
                        <h4>{Example[selectedTopic].company}</h4>
                        <h4>{Example[selectedTopic].year}</h4>
                        <p>{Example[selectedTopic].description}</p>
                        <p>{Example[selectedTopic].li1}</p>
                        <p>{Example[selectedTopic].li2}</p>
                        <p>{Example[selectedTopic].li3}</p>
                    </div>
                </div>
            </div>
        </section>
    );

}