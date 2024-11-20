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
import DevotionalShow1 from '../Assets/Images/Tv-Show-1.webp';
import DevotionalShow2 from '../Assets/Images/Tv-Show-2.webp';
import DevotionalShow3 from '../Assets/Images/Tv-Show-3.jpg';
import DevotionalShow4 from '../Assets/Images/Tv-Show-4.webp';
import DevotionalShow5 from '../Assets/Images/Tv-Show-5.webp';
import DevotionalShow6 from '../Assets/Images/Tv-Show-6.jpg';
import TvShow1 from '../Assets/Images/Tv-Show-7.jpg';
import TvShow2 from '../Assets/Images/Tv-Show-8.jpg';
import TvShow3 from '../Assets/Images/Tv-Show-9.jpg';
import TvShow4 from '../Assets/Images/Tv-Show-10.webp';
import TvShow5 from '../Assets/Images/Tv-Show-11.webp';
import TvShow6 from '../Assets/Images/Tv-Show-12.jpg';

const MyCard = () => {
    return (
        <>

            <Container>
                <Row className='mt-2'><h2 className='left-align'>Latest Released</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2} sm={4}>
                        <Card style={{ width: '200px'}}>
                            <Card.Img variant="top" src={LatestMovie1} style={{ objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Singham Again</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card style={{ width: '200px'}}>
                            <Card.Img variant="top" src={LatestMovie2} style={{ objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Bhool Bhulaiyaa 3</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie3} style={{ width: '200px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Fighter</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie4} style={{ width: '200px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Pushpa 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie5} style={{ width: '200px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Stree 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={LatestMovie6} style={{ width: '200px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Devara</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-2'><h2 className='left-align'>Devotional Shows</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={DevotionalShow6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Hollywood Movies</h2></Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Avengers Endgame</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Black Panther</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Spider Man</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Civil War</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Transformer One</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={HollywoodMovie6} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Thor</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <hr style={{ borderTop: '3px solid blue' }} /> */}
                <Row className='mt-2'><h2 className='left-align'>Popular Show</h2></Row>
                <Row className='mt-2 mb-5'>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow1} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow2} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow3} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow4} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow5} style={{ height: '300px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} sm={4}>
                        <Card>
                            <Card.Img variant="top" src={TvShow6} style={{ height: '300px', objectFit: 'cover' }}/>
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