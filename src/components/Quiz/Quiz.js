import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ quiz, index }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    // console.log(quiz);
    const checkAns = ans => {
        const result = ans === correctAnswer ? 'Correct' : 'not Correct';
        console.log(result)
    }
    return (

        <div className='w-75 m-auto my-4 shadow p-3 px-4 text-start'>
            <div>
                <h5><span className='text-decoration-underline'> Question No. {index + 1}: </span> {question}</h5>
                <hr />
            </div>
            <div className="row">
                {
                    options.map((option, i) => <Option key={i} option={option} question={question} checkAns={checkAns}></Option>)
                }
            </div>
        </div>

    );
};

export default Quiz;