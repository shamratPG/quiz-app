import React from 'react';
import './Topics.css'
import TopicCard from '../TopicCard/TopicCard';

const Topics = ({ topics }) => {

    return (
        <div className="container-fluid">

            <div className="row">

                {
                    topics.data.map(topic => <TopicCard key={topic.id} cardData={topic}></TopicCard>)
                }
            </div>
        </div>
    );
};

export default Topics;