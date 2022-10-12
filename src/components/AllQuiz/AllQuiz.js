import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const allQuiz = useLoaderData();
    const { questions } = allQuiz.data
    // console.log(allQuiz.data.name);
    return (
        <div className='my-5'>
            <h2 className='my-4'>Quiz for {allQuiz.data.name}</h2>
            {
                questions.map(q => <Quiz key={q.id} quiz={q}></Quiz>)
            }
        </div>
    );
};

export default AllQuiz;