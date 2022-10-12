import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const allQuiz = useLoaderData();
    const { questions } = allQuiz.data;
    // console.log(allQuiz.data.name);
    return (
        <div className='my-5'>
            <h2 className='my-4'>Quiz for <span className='text-primary'> {allQuiz.data.name} </span></h2>
            {
                questions.map((q, i) => <Quiz key={q.id} quiz={q} index={i} ></Quiz>)
            }
        </div>
    );
};

export default AllQuiz;