import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Movie1 from '../Assets/Images/Movie1.jpg';
import Movie2 from '../Assets/Images/Movie2.jpeg';
import Movie3 from '../Assets/Images/Movie3.jpg';
import Movie4 from '../Assets/Images/Movie4.jpg';
import Movie5 from '../Assets/Images/Movie5.jpg';
import Movie6 from '../Assets/Images/Movie6.jpg';

const MyCard = () => {
    return (
        <>

            <Container>
                <Row className='mt-2'><h2 className='left-align'>Latest Released</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Latest Released</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Latest Released</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Latest Released</h2></Row>
                <Row className='mt-2 mb-5'>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={Movie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default MyCard;
