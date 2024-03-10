import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Question.scss';
import { ChevronDown } from '../../assets/icons';

function Question({ className, ques, render }) {
    const [isActive, setIsActive] = useState(false);

    const generateClassString = () => {
        const classes = { [className]: className, question: true };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    const toggleActive = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <div className={generateClassString()}>
            <div className={`question_ques ${isActive ? 'bg_ccc' : ''}`} onClick={toggleActive}>
                <h4>
                    <p>{ques}</p>
                </h4>
                <ChevronDown />
            </div>
            <ul className={`question_answers ${isActive ? 'active' : ''}`}>{render}</ul>
        </div>
    );
}

Question.propTypes = {
    className: PropTypes.string,
    ques: PropTypes.string,
    render: PropTypes.node,
};

export default Question;
