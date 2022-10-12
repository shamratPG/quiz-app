import React from 'react';
import Option from '../Option/Option';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz, index }) => {
    // console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    const correctAns = () => toast.success("Correct Answer", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
        draggable: false,
        pauseOnHover: false,
    });
    const incorrectAns = () => toast.error("Incorrect Answer", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
        draggable: false,
        pauseOnHover: false,
    });
    // console.log(quiz);
    const checkAns = ans => {
        if (ans === correctAnswer) {
            correctAns()
        } else incorrectAns();
    }
    return (

        <div className='w-75 m-auto my-4 shadow p-3 px-4 text-start'>
            <div>
                <h5 className='text-center text-secondary'><span className='text-decoration-underline'> Question No. {index + 1}: </span> {question}</h5>
                <hr />
            </div>
            <div className="row">
                {
                    options.map((option, i) => <Option key={i} option={option} question={question} checkAns={checkAns}></Option>)
                }
                <ToastContainer />
            </div>
        </div>

    );
};

export default Quiz;