import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const TopicCard = ({ cardData }) => {
    const { id, logo, name, total } = cardData;
    // console.log(cardData);
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className='bg-secondary text-white'>
                <Card.Img className="border rounded border-2 border-light" variant="top" src={logo} />
                <Card.Body className='pt-1'>
                    <Card.Text className='mb-2'>
                        <span className='fs-2'>{name}</span>
                    </Card.Text>
                    <div className='d-flex justify-content-around align-items-center'>
                        <span className='fs-5'>{total} Quizs</span>
                        <Button variant='light' className='fw-semibold px-3'>Start</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopicCard;