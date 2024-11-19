import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <Container fluid className='bg-dark py-3' variant='dark'>
                <Row>
                    <div className="share-icon d-flex justify-content-center align-items-center">
                    {/* <CircumIcon name="facebook"/> */}
                        <a href="https://facebook.com" className=' mx-2 text-white text-decoration-none'>
                        <FaFacebook size={30} color="aqua" />
                            {' '}Facebook
                        </a>
                        <a href="https://facebook.com" className=' mx-2 text-white text-decoration-none'>
                        <FaInstagram size={30} color="red" />
                        {' '}Instagram
                        </a>
                        <a href="https://facebook.com" className='mx-2 text-white text-decoration-none'>
                        <FaTwitter size={30} color="blue" />
                            {' '}Twitter
                            {/* <img className='rounded-circle p-1 bg-success' style={{ height: '40px', objectFit: 'cover' }} src={icon3} alt="" />
                            {' '}Twitter */}
                        </a>
                        <a href="https://facebook.com" className='mx-2 text-white text-decoration-none'>
                        <FaGithub size={30} color="white" />
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
