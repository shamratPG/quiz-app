import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid py-5 bg-secondary text-white" style={{ backgroundImage: "url(images/background.jpg)" }}>
                <div className="container">
                    <h1 className="display-4">Test Yourself</h1>
                    <p className="lead">Take our quiz to test what you have learned so far. </p>
                </div>
            </div>

        </div>
    );
};

export default Hero;