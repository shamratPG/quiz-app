import React from 'react';
import Card from 'react-bootstrap/Card';

const TopicCard = ({ cardData }) => {
    const { logo, name } = cardData;
    console.log(cardData);
    return (
        <div className="col-3">
            <Card className='bg-secondary'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopicCard;