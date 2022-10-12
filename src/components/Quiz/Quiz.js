import React from 'react';
import Option from '../Option/Option';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz, index }) => {
    const toastStyle = {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
        draggable: false,
        pauseOnHover: false,
    }

    const { question, options, correctAnswer } = quiz;
    const checkAns = ans => {
        if (ans === correctAnswer) {
            toast.success("Correct Answer", toastStyle);
        } else {
            toast.error("Incorrect Answer", toastStyle);
        };
    }

    const showCorrectAns = correctAns => {
        toast.info(correctAns, toastStyle);
    }
    return (

        <div className='m-auto my-4 shadow p-3 px-4 text-start' style={{ width: '80%' }}>
            <div className='position-relative'>
                <h5 className='text-center text-secondary py-4'><span className='text-decoration-underline'> Question No. {index + 1}: </span> {question}</h5>
                <span className='position-absolute top-0 end-0'>
                    <FontAwesomeIcon onClick={() => showCorrectAns(correctAnswer)} style={{ cursor: 'pointer' }} icon={faEye}></FontAwesomeIcon>
                </span>
            </div>
            <hr />
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