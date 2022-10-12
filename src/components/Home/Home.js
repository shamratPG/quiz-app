import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div className="bg-dark">
            <Hero></Hero>
            <Topics topics={topics}></Topics>
        </div>
    );
};

export default Home;