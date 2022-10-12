import React from 'react';

const Option = ({ option, question, checkAns }) => {
    return (
        <div className='col-12 col-lg-6 p-2 ps-4 d-flex flex-wrap justify-content-start align-items-center'>
            <input className='' id={option} type="radio" name={question} onClick={() => checkAns(option)} />
            <label className='ps-2 pb-1' htmlFor={option}>{option}</label>
        </div>


    );
};

export default Option;
