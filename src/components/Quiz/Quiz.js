import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(quiz);
    const checkAns = (ans) => {
        const result = ans === correctAnswer ? 'Correct' : 'Incorrect';
        console.log(result);
    }
    return (

        <div className='w-75 m-auto my-4 shadow p-3'>
            <div>
                <h5>{question}</h5>
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