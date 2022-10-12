import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TopicCard = ({ cardData }) => {
    const { id, logo, name, total } = cardData;
    // console.log(cardData);
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className='text-white ' style={{ backgroundColor: '#1f2021' }}>
                <Card.Img className=" rounded border-2 border-light" variant="top" src={logo} />
                <Card.Body className='pt-1'>
                    <Card.Text className='mb-2'>
                        <span className='fs-2'>{name}</span>
                    </Card.Text>
                    <div className='d-flex justify-content-around align-items-center'>
                        <span className='fs-5'>{total} Quiz</span>
                        <Link className='btn btn-primary fw-semibold px-3' to={`quiz/${id}`}>Start</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopicCard;