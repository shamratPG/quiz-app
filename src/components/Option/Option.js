import React from 'react';

const Option = ({ option, question, checkAns }) => {
    return (
        <div className='col-6 p-2'>
            <input className='' id={option} type="radio" name={question} onClick={() => checkAns(option)} />
            <label className='ps-2' htmlFor={option}>{option}</label>
        </div>


    );
};

export default Option;
