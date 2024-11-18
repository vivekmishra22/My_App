import React from 'react';
import { Container, Row } from 'react-bootstrap';
import icon1 from '../Assets/Images/Icon1.png'
import icon2 from '../Assets/Images/Icon2.png'
import icon3 from '../Assets/Images/Icon3.png'
import icon4 from '../Assets/Images/Icon4.png'

const Footer = () => {
    return (
        <>
            <Container fluid className='bg-dark py-3' variant='dark'>
                <Row>
                    <div className="share-icon d-flex justify-content-center align-items-center">
                        <a href="https://facebook.com" className=' mx-2 text-white text-decoration-none'>
                            <img className='rounded-circle p-1 bg-success' style={{ height: '40px', objectFit: 'cover' }} src={icon1} alt="" />
                            {' '}Facebook
                        </a>
                        <a href="https://facebook.com" className=' mx-2 text-white text-decoration-none'>
                            <img className='rounded-circle p-1 bg-success' style={{ height: '40px', objectFit: 'cover' }} src={icon2} alt="" />
                            {' '}Instagram
                        </a>
                        <a href="https://facebook.com" className='mx-2 text-white text-decoration-none'>
                            <img className='rounded-circle p-1 bg-success' style={{ height: '40px', objectFit: 'cover' }} src={icon3} alt="" />
                            {' '}Twitter
                        </a>
                        <a href="https://facebook.com" className='mx-2 text-white text-decoration-none'>
                            <img className='rounded-circle p-1 bg-success' style={{ height: '40px', objectFit: 'cover' }} src={icon4} alt="" />
                            {' '}Github
                        </a>
                    </div>
                </Row>
                <Row>
                    <div className="copyright text-white mt-2">
                        {/* Created by Vivek Mishra <br /> */}
                        &copy; 2024 MyApp. All Rights Reserved.
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
