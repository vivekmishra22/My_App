import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import LatestMovie1 from '../Assets/Images/Latest-Movie-1.avif';
import LatestMovie2 from '../Assets/Images/Latest-Movie-2.avif';
import LatestMovie3 from '../Assets/Images/Latest-Movie-3.avif';
import LatestMovie4 from '../Assets/Images/Latest-Movie-4.avif';
import LatestMovie5 from '../Assets/Images/Latest-Movie-5.avif';
import LatestMovie6 from '../Assets/Images/Latest-Movie-6.avif';
import HollywoodMovie1 from '../Assets/Images/Hollywood-Movie-1.avif';
import HollywoodMovie2 from '../Assets/Images/Hollywood-Movie-2.avif';
import HollywoodMovie3 from '../Assets/Images/Hollywood-Movie-3.avif';
import HollywoodMovie4 from '../Assets/Images/Hollywood-Movie-4.avif';
import HollywoodMovie5 from '../Assets/Images/Hollywood-Movie-5.avif';
import HollywoodMovie6 from '../Assets/Images/Hollywood-Movie-6.avif';
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
                            <Card.Img variant="top" src={LatestMovie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Singham Again</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Bhool Bhulaiyaa 3</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Fighter</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Pushpa 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Stree 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Devara</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Hollywood Movies</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie6} style={{ height: '300px', objectFit: 'cover' }}/>
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
                            <Card.Img variant="top" src={LatestMovie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie2} style={{ height: '300px', objectFit: 'cover' }}/>
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
                            <Card.Img variant="top" src={LatestMovie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie2} style={{ height: '300px', objectFit: 'cover' }}/>
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
