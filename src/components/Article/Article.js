import React from 'react';
import { Card } from 'react-bootstrap';

const Article = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className='my-4 shadow'>
            <Card className="p-3">
                <Card.Body>
                    <Card.Title>
                        {question}
                    </Card.Title>
                    <Card.Text>
                        {answer}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Article;